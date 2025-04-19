import axios, { AxiosResponse } from 'axios';
import ApiClient from '@/api/ApiClient';

export type LLMIdentifier = 'grok' | 'chatgpt' | 'claude';

interface OpenPromptRequest {
  prompt: string;
  llmIdentifier?: LLMIdentifier;
  temperature?: number;
  bypassCache?: boolean;
}

export type OpenPromptResponse = any;

export const openPromptService = async (
  prompt: string,
  llm?: LLMIdentifier,
  temp?: number,
  bypassCache?: boolean,
): Promise<string> => {
  try {
    const requestData: OpenPromptRequest = {
      prompt: prompt,
      llmIdentifier: llm,
      temperature: temp ?? 0.7,
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
