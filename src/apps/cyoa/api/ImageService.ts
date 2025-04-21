import apiClient from '@/api/ApiClient';
import { IAdventureWrapper } from './AdventureService';

export interface IGenerateImageRequest {
  model?: string;
  size?: string;
  quality?: string;
  imageCount?: number;
  prompt: string;
}

export type imageSizeType =
  | '1024x1024'
  | '256x256'
  | '512x512'
  | '1792x1024'
  | '1024x1792'
  | null
  | undefined;

export const getImagesForPrompt = async (
  prompt: string,
  id: string,
  size: imageSizeType = '1024x1024',
  index: number,
): Promise<IAdventureWrapper> => {
  if (!id) {
    throw new Error('Valid ID string is required');
  }
  if (isNaN(index) || index < 0) {
    throw new Error('Valid non-negative index number is required');
  }

  try {
    const response = await apiClient.post<IAdventureWrapper>(`/generateimages/${id}/${index}`, {
      prompt: prompt,
      size: size,
    });

    if (!response.data) {
      throw new Error('No adventure data received from server');
    }

    return response.data;
  } catch (error) {
    throw new Error(`Failed to generate images: ${JSON.stringify(error)}`);
  }
};
