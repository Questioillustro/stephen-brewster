import apiClient from '@/api/ApiClient';

export interface IAdventureWrapper {
  _id: string;
  contextPrompts: string;
  storyPrompts: string;
  adventure: IAdventure;
  artStyle: string;
}

export interface IAdventurePage {
  text: string;
  imagePrompt: string;
  imageUrl?: string;
}

export interface IAdventure {
  pages: IAdventurePage[];
  title: string;
}

export const BuildAVenture = async (
  prompts: string,
  characterPrompts: string,
  artStyle: string,
  llm: string,
  temperature?: number,
): Promise<IAdventureWrapper> => {
  try {
    const response = await apiClient.post<IAdventureWrapper>(`/buildaventure`, {
      prompts: prompts,
      character: characterPrompts,
      artStyle: artStyle,
      temperature: temperature ?? 0.7,
      llm: llm ?? 'grok',
    });
    if (!response.data) throw new Error('No adventure data received');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to generate adventure: ${JSON.stringify(error)}`);
  }
};

export const getExistingAdventuresForStory = async (): Promise<IAdventureWrapper[]> => {
  try {
    const response = await apiClient.get<IAdventureWrapper[]>(`/adventures`);
    if (!response.data) throw new Error('No adventures found');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch adventures: ${JSON.stringify(error)}`);
  }
};
