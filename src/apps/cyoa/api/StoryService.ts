import apiClient from '@/api/ApiClient';

export interface IStory {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
  setup: string;
}

export const getStories = async (): Promise<IStory[]> => {
  try {
    const response = await apiClient.get<IStory[]>('/stories');
    return response.data || [];
  } catch (error) {
    console.error('Failed to fetch stories:', error);
    return [];
  }
};
