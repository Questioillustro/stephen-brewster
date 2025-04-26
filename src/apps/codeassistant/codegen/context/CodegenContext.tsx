import { createContext, useContext, useEffect, useState } from 'react';
import { IFrontEndFrameworkOption } from '@/apps/codeassistant/codegen/data/AllOptions';
import { OpenPromptResponse, openPromptService } from '@/service/OpenPromptService';
import {
  DefaultSpecialRequestOptions,
  ISpecialRequest,
} from '@/apps/codeassistant/codegen/components/inputs/specialrequests/SpecialRequests.types';
import {
  CodeGenResponseStructure,
  ICodeGenResponse,
  LlmOptionType,
} from '@/apps/codeassistant/codegen/CodeGen.types';

interface CodegenContextType {
  framework: IFrontEndFrameworkOption | undefined;
  setFramework: (framework: IFrontEndFrameworkOption) => void;
  specialRequests: ISpecialRequest[];
  setSpecialRequests: (requests: ISpecialRequest[]) => void;
  addSpecialRequest: (request: ISpecialRequest) => void;
  removeSpecialRequest: (requestId: string) => void;
  codeExample: string | undefined;
  setCodeExample: (example: string | undefined) => void;
  uiLibrary: string;
  setUiLibrary: (library: string) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
  sendRequest: () => void;
  loading: boolean;
  fullPrompt: string;
  llmOption: LlmOptionType;
  setLlmOption: (llm: LlmOptionType) => void;
  resultHistory: ICodeGenResponse[];
  addResult: (result: ICodeGenResponse) => void;
  resultViewIndex: number;
  setResultViewIndex: (index: number) => void;
}

export const CodegenContext = createContext<CodegenContextType | undefined>(undefined);

export function CodegenProvider({ children }) {
  const [framework, setFramework] = useState<IFrontEndFrameworkOption>();

  const [uiLibrary, setUiLibrary] = useState<string>('');

  const [specialRequests, setSpecialRequests] = useState<ISpecialRequest[]>(
    DefaultSpecialRequestOptions,
  );

  const [codeExample, setCodeExample] = useState<string | undefined>();

  const [prompt, setPrompt] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  const [fullPrompt, setFullPrompt] = useState<string>('');

  const [llm, setLlm] = useState<LlmOptionType>('chatgpt');

  const [resultHistory, setResultHistory] = useState<ICodeGenResponse[]>([]);

  const [resultViewIndex, setResultViewIndex] = useState<number>(0);

  const sendRequest = () => {
    setLoading(true);

    openPromptService(fullPrompt, llm, 0.7).then((response: OpenPromptResponse) => {
      addResult(JSON.parse(response));
      setLoading(false);
    });
  };

  const addSpecialRequest = (request: ISpecialRequest) => {
    setSpecialRequests([request].concat(specialRequests));
  };

  const removeSpecialRequest = (requestId: string) => {
    const newList = specialRequests.filter((sr) => sr.id !== requestId);
    setSpecialRequests(newList);
  };

  const addResult = (result: ICodeGenResponse) => {
    const newHistory = [result].concat(resultHistory);
    setResultHistory(newHistory);
  };

  useEffect(() => {
    buildPrompt();
  }, [framework, prompt, uiLibrary, specialRequests, codeExample]);

  useEffect(() => {
    console.log('codegen context updated', fullPrompt);
  }, [fullPrompt]);

  const buildPrompt = () => {
    const bePolite = `Please help me write some code!`;
    const jsonFormat = `Format the response json as: ${CodeGenResponseStructure}.`;

    const frameworkPrompt = framework ? `Use framework: ${framework.framework}.` : undefined;
    const libraryPrompt = uiLibrary ? `Use UI library: ${uiLibrary}.` : undefined;
    const userPrompt = prompt ? `${prompt}.` : undefined;
    const codeExamplePrompt = codeExample ? `\n${codeExample}` : undefined;

    const specialRequestsPrompt = specialRequests.map((sr) => sr.prompt).join('\n');

    const promptArray = [
      bePolite,
      jsonFormat,
      frameworkPrompt,
      libraryPrompt,
      userPrompt,
      specialRequestsPrompt,
      codeExamplePrompt,
    ];

    const fullPrompt = promptArray
      .filter((p) => p)
      .join('\n')
      .trim();

    setFullPrompt(fullPrompt);
  };

  const value = {
    framework: framework,
    setFramework: setFramework,
    specialRequests: specialRequests,
    setSpecialRequests: setSpecialRequests,
    addSpecialRequest: addSpecialRequest,
    removeSpecialRequest: removeSpecialRequest,
    codeExample: codeExample,
    setCodeExample: setCodeExample,
    uiLibrary: uiLibrary,
    setUiLibrary: setUiLibrary,
    prompt: prompt,
    setPrompt: setPrompt,
    sendRequest: sendRequest,
    loading: loading,
    fullPrompt: fullPrompt,
    llmOption: llm,
    setLlmOption: setLlm,
    resultHistory: resultHistory,
    addResult: addResult,
    resultViewIndex: resultViewIndex,
    setResultViewIndex: setResultViewIndex,
  };

  return <CodegenContext.Provider value={value}>{children}</CodegenContext.Provider>;
}

export function useCodegenContext(): CodegenContextType {
  const context = useContext(CodegenContext);
  if (!context) {
    throw new Error('useCodegenContext must be used within a CodeGenProvider');
  }
  return context;
}
