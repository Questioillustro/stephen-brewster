import apiClient from '@/api/ApiClient';
import { ICodeGen } from '@/apps/codeassistant/codegen/CodeGen.types';

export const SaveCode = async (request: ICodeGen) => {
  try {
    return await apiClient.post<ICodeGen>(`/savecodegen`, request);
  } catch (error) {
    console.log(`Failed to save codegen: ${JSON.stringify(error)}`);
  }
};
