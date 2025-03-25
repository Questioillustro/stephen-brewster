import apiClient from '@/api/ApiClient';

export interface IAdventure {
  _id: string;
  storyId: string;
  contextPrompts: string[];
  storyPrompts: string[];
  imageUrl: string;
  steps: IAdventureStep[];
}

export interface IAdventureStep {
  text: string;
  imagePrompt: string;
  imageUrl: string;
}

export const generateNewAdventure = async (id: string, prompts: string[]): Promise<IAdventure> => {
  const response = await apiClient.post<IAdventure>(`/quickadventure/${id}`, {
    prompts: prompts,
  });
  return response.data;
};

export const getQuickAdventures = async (storyid: string): Promise<IAdventure[]> => {
  const response = await apiClient.get<IAdventure[]>(`/adventure/${storyid}`);
  return response.data;
};
