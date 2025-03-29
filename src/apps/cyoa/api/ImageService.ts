import apiClient from '@/api/ApiClient';
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
  if (!id) {
    throw new Error('Valid ID string is required');
  }
  if (isNaN(index) || index < 0) {
    throw new Error('Valid non-negative index number is required');
  }

  try {
    const response = await apiClient.post<IAdventure>(`/generateimages/${id}/${index}`, {
      prompt: prompt,
    });

    if (!response.data) {
      throw new Error('No adventure data received from server');
    }

    return response.data;
  } catch (error) {
    throw new Error(`Failed to generate images: ${JSON.stringify(error)}`);
  }
};
