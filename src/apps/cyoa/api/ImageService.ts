import apiClient from './apiClient';
import { IAdventure } from './AdventureService';

export interface IGenerateImageRequest {
  model?: string;
  size?: string;
  quality?: string;
  imageCount?: number;
  prompt: string;
}

export const getImagesForPrompt = async (
  prompt: string,
  id: string,
  index: number,
): Promise<IAdventure> => {
  const response = await apiClient.post<IAdventure>(
    `/generateimages/${id}/${index}`,
    {
      prompt: prompt,
    },
  );
  return response.data;
};
