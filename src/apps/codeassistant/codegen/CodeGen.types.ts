export interface ICodeGen {
  _id?: string;
  request: ICodeGenSaveRequest;
  response: ICodeGenResponse;
  notes?: string[];
}

export interface ICodeGenSaveRequest {
  framework?: string;
  specialRequests?: string[];
  codeExample?: string;
  uiLibrary?: string;
  prompt?: string;
  llmOption: LlmOptionType;
  code: ICodeGenResponse;
}

export interface ICodeGenObject {
  fileName: string;
  content: string;
}

export interface ICodeGenResponse {
  code: ICodeGenObject[];
}

export const CodeGenResponseStructure = `{ code: [ { fileName, content } ] }`;

export type LlmOptionType = 'grok' | 'chatgpt' | 'claude';
