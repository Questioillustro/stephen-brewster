import { LibraryItem } from '@/apps/writing/library/library';

const writingCache: Map<string, string> = new Map();

export const writingService = {
  async loadWritingItem(item: LibraryItem): Promise<LibraryItem> {
    // Check if content is already in cache
    if (writingCache.has(item.fileName)) {
      return {
        ...item,
        content: writingCache.get(item.fileName)!,
      };
    }

    try {
      // Import the writing file to get its URL
      const writingModule = await import(`@/apps/writing/library/${item.fileName}`);
      const writingUrl = writingModule.default;

      // Fetch the raw content
      const response = await fetch(writingUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${item.fileName}: ${response.statusText}`);
      }
      const writingContent = await response.text();
      let cleanContent: string = '';

      // Try to parse metadata if it exists
      let metadata: undefined | {} = undefined;
      try {
        const metadataMatch = writingContent.match(/^---\n([\s\S]*?)\n---\n/);
        if (metadataMatch) {
          const metadataStr = metadataMatch[1];
          const metadataObj = {};
          metadataStr.split('\n').forEach((line) => {
            const [key, value] = line.split(':').map((s) => s.trim());
            if (key && value) metadataObj[key] = value;
          });
          metadata = metadataObj;
          // Remove metadata from content
          cleanContent = writingContent.replace(/^---\n[\s\S]*?\n---\n/, '');
        } else {
          cleanContent = writingContent;
        }
      } catch (metaError) {
        console.warn(`No metadata found for ${item.fileName}`);
        cleanContent = writingContent;
      }

      // Cache the content
      writingCache.set(item.fileName, cleanContent);

      return {
        ...item,
        content: cleanContent,
      };
    } catch (error) {
      console.error(`Error loading ${item.fileName}:`, error);
      return item; // Return original item without content in case of error
    }
  },

  async loadWritingItems(items: LibraryItem[]): Promise<LibraryItem[]> {
    const results: LibraryItem[] = await Promise.all(
      items.map((item) => this.loadWritingItem(item)),
    );
    return results;
  },

  clearCache(): void {
    writingCache.clear();
  },

  getCacheSize(): number {
    return writingCache.size;
  },
};
