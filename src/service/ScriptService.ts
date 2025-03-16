interface ScriptContent {
  name: string;
  content: string;
  error?: string;
}

const scriptCache: Map<string, ScriptContent> = new Map();

export const scriptService = {
  async loadScript(scriptName: string): Promise<ScriptContent> {
    // Check if script is already in cache
    if (scriptCache.has(scriptName)) {
      return scriptCache.get(scriptName)!;
    }

    try {
      // Import the .py file to get its URL
      const scriptModule = await import(`@/apps/pythonscripts/scripts/${scriptName}`);
      const scriptUrl = scriptModule.default;

      // Fetch the raw content using the URL
      const response = await fetch(scriptUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${scriptName}: ${response.statusText}`);
      }
      const scriptContent = await response.text();

      const scriptData = { name: scriptName, content: scriptContent };

      // Cache the result
      scriptCache.set(scriptName, scriptData);
      return scriptData;
    } catch (error) {
      console.error(`Error loading ${scriptName}:`, error);
      const errorData = {
        name: scriptName,
        content: '',
        error: `Error loading script: ${error instanceof Error ? error.message : 'Unknown error'}`,
      };

      // Cache the error result as well to prevent repeated failed attempts
      scriptCache.set(scriptName, errorData);
      return errorData;
    }
  },

  async loadScripts(scriptNames: string[]): Promise<ScriptContent[]> {
    const results = await Promise.all(scriptNames.map((scriptName) => this.loadScript(scriptName)));
    return results;
  },

  clearCache(): void {
    scriptCache.clear();
  },

  getCacheSize(): number {
    return scriptCache.size;
  },
};
