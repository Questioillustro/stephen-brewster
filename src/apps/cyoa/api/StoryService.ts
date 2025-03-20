import apiClient from './apiClient';

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
    return response.data || []; // Return data if it exists, otherwise an empty array
  } catch (error) {
    console.error('Failed to fetch stories:', error); // Optional: Log the error for debugging
    return []; // Return empty array on failure
  }
};
