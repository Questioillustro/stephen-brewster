import { IFrontEndFrameworkOption } from '@/apps/codeassistant/codegen/data/AllOptions';
import { ISpecialRequest } from '@/apps/codeassistant/codegen/components/inputs/specialrequests/SpecialRequests.types';
import { LlmOptionType } from '@/apps/codeassistant/codegen/context/CodegenContext';
import apiClient from '@/api/ApiClient';
import { ICodeGenResponse } from '@/apps/codeassistant/codegen/CodeGen.types';

export interface ICodeGenSaveRequest {
  framework?: IFrontEndFrameworkOption;
  specialRequests?: ISpecialRequest[];
  codeExample?: string;
  uiLibrary?: string;
  prompt: string;
  llmOption: LlmOptionType;
  code: ICodeGenResponse;
}

export const SaveCode = async (request: ICodeGenSaveRequest) => {
  try {
    const response = await apiClient.post(`/savecodegen`, request);
  } catch (error) {
    console.log(`Failed to save codegen: ${JSON.stringify(error)}`);
  }
};
