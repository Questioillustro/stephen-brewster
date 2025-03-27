import axios, { AxiosResponse } from 'axios';
import ApiClient from '@/api/ApiClient';

export type LLMIdentifier = 'grok' | 'chatgpt' | 'claude';

interface OpenPromptRequest {
  prompt: string;
  llmIdentifier?: LLMIdentifier;
  bypassCache?: boolean;
}

type OpenPromptResponse = string;

export const openPromptService = async (
  prompt: string,
  llm?: LLMIdentifier,
  bypassCache?: boolean,
): Promise<string> => {
  try {
    const requestData: OpenPromptRequest = {
      prompt: prompt,
      llmIdentifier: llm,
      bypassCache: bypassCache ?? false,
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
