import axios, { AxiosResponse } from 'axios';
import ApiClient from '@/api/ApiClient';
import { ICalendarData } from '@/apps/finance/FinanceDataGrid';

interface OpenPromptRequest {
  prompts: string[];
}

type OpenPromptResponse = string;

export const openPromptService = async (prompts: string[]): Promise<string> => {
  try {
    const requestData: OpenPromptRequest = {
      prompts: prompts,
    };

    const response: AxiosResponse<OpenPromptResponse> = await ApiClient.post(
      `/openprompt`,
      requestData,
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || 'Failed to fetch prompt response from server',
      );
    }
    throw new Error('An unexpected error occurred while calling openprompt');
  }
};
