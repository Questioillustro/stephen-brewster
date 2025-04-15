import axios, { AxiosResponse } from 'axios';
import ApiClient from '@/api/ApiClient';

const getGrokModels = async () => {
  try {
    const response: AxiosResponse<any> = await ApiClient.get(`/getGrokModels`);

    console.log(`getModels response ${JSON.stringify(response)}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || 'Failed to fetch prompt response from server',
      );
    }
    throw new Error('An unexpected error occurred while getting grok models');
  }
};

export default getGrokModels;
