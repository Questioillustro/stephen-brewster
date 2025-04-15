import apiClient from '@/api/ApiClient';

export interface IStory {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
  setup: string;
}

let cache: IStory[] | undefined = undefined;

export const getStories = async (): Promise<IStory[]> => {
  try {
    if (cache) {
      return cache;
    }

    const response = await apiClient.get<IStory[]>('/stories');
    const stories = response.data || [];

    cache = stories;

    return stories;
  } catch (error) {
    console.error('Failed to fetch stories:', error);
    return cache || [];
  }
};
