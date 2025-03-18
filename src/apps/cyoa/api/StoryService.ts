import apiClient from './apiClient';

export interface IStory {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
  setup: string;
}

export const getStories = async (): Promise<IStory[]> => {
  const response = await apiClient.get<IStory[]>('/stories');
  return response.data;
};
