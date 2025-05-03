export interface ICodeGen {
  _id?: string;
  request: ICodeGenRequest;
  response: ICodeGenResponse;
  notes?: string[];
}

export interface ICodeGenSaveRequest {
  codeGen: ICodeGen;
}

export interface ICodeObject {
  fileName: string;
  content: string;
}

export interface ICodeGenRequest {
  framework?: string;
  specialRequests?: string[];
  codeExample?: string;
  uiLibrary?: string;
  prompt?: string;
  llmOption: LlmOptionType;
}

export interface ICodeGenResponse {
  code: ICodeObject[];
}

export interface IFrontEndFrameworkOption {
  framework: FeFrameworkType;
  uiLibraries: string[];
  syntaxHighlighter?: SyntaxLanguages;
}

export type FeFrameworkType = 'React' | 'Angular' | 'Vue' | 'JavaScript';

export type SyntaxLanguages = 'jsx' | 'tsx' | 'js';

export const CodeGenResponseStructure = `{ code: [ { fileName, content } ] }`;

export type LlmOptionType = 'grok' | 'chatgpt' | 'claude';
