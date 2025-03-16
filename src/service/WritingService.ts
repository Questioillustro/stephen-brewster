const writingCache: Map<string, string> = new Map();

export const writingService = {
  async loadWriting(fileName: string): Promise<undefined | string> {
    // Check if writing piece is already in cache
    if (writingCache.has(fileName)) {
      return writingCache.get(fileName)!;
    }

    try {
      // Import the writing file (assuming .txt or .md files) to get its URL
      const writingModule = await import(`@/apps/writing/myths/${fileName}`);
      const writingUrl = writingModule.default;

      // Fetch the raw content using the URL
      const response = await fetch(writingUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`);
      }
      const writingContent = await response.text();
      let cleanContent: string = '';

      // Try to parse metadata if it exists (assuming metadata might be in frontmatter or JSON format)
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
        }
      } catch (metaError) {
        console.warn(`No metadata found for ${fileName}`);
      }

      // Cache the result
      writingCache.set(fileName, cleanContent);
      console.log(cleanContent);
      return cleanContent;
    } catch (error) {
      console.error(`Error loading ${fileName}:`, error);
    }
  },

  async loadWritings(fileNames: string[]): Promise<(string | undefined)[]> {
    const results: (string | undefined)[] = await Promise.all(
      fileNames.map((writingName) => this.loadWriting(writingName)),
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
