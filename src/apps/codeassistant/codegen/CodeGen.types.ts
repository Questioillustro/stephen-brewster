export interface ICodeGenObject {
  fileName: string;
  content: string;
}

export interface ICodeGenResponse {
  code: ICodeGenObject[];
}

export const CodeGenResponseStructure = `{ code: [ { fileName, content } ] }`;
