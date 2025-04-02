import apiClient from '@/api/ApiClient';
import { IStory } from '@/apps/cyoa/api/StoryService';

export interface IAdventure {
  _id: string;
  storyId: string;
  contextPrompts: string[];
  storyPrompts: string[];
  imageUrl: string;
  steps: IAdventureStep[];
  story: IStory;
}

export interface IAdventureStep {
  text: string;
  imagePrompt: string;
  imageUrl: string;
}

export const generateNewAdventure = async (
  id: string,
  prompts: string,
  characterPrompts: string,
  llm: string,
  temperature?: number,
): Promise<IAdventure> => {
  try {
    const response = await apiClient.post<IAdventure>(`/quickadventure/${id}`, {
      prompts: prompts,
      character: characterPrompts,
      temperature: temperature ?? 0.7,
      llm: llm ?? 'grok',
    });
    if (!response.data) throw new Error('No adventure data received');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to generate adventure: ${JSON.stringify(error)}`);
  }
};

export const getExistingAdventuresForStory = async (storyid: string): Promise<IAdventure[]> => {
  try {
    const response = await apiClient.get<IAdventure[]>(`/adventure/${storyid}`);
    if (!response.data) throw new Error('No adventures found');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch adventures: ${JSON.stringify(error)}`);
  }
};
