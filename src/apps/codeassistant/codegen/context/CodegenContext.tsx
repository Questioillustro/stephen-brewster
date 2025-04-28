import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  FrontEndFrameworkOptions,
  IFrontEndFrameworkOption,
} from '@/apps/codeassistant/codegen/data/AllOptions';
import { OpenPromptResponse, openPromptService } from '@/service/OpenPromptService';
import {
  DefaultSpecialRequestOptions,
  ISpecialRequest,
  SpecialRequestOptions,
} from '@/apps/codeassistant/codegen/components/inputs/specialrequests/SpecialRequests.types';
import {
  CodeGenResponseStructure,
  ICodeGen,
  ICodeGenResponse,
  LlmOptionType,
} from '@/apps/codeassistant/codegen/CodeGen.types';

interface CodegenContextType {
  framework: IFrontEndFrameworkOption | undefined;
  setFramework: (framework: IFrontEndFrameworkOption) => void;
  specialRequests: ISpecialRequest[];
  addSpecialRequest: (request: ISpecialRequest) => void;
  removeSpecialRequest: (requestId: string) => void;
  codeExample?: string;
  setCodeExample: (example: string | undefined) => void;
  uiLibrary?: string;
  setUiLibrary: (library: string) => void;
  prompt?: string;
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
  setCodeGenContext: (codeGen: ICodeGen) => void;
}

interface CodegenProviderProps {
  children: React.ReactNode;
}

export const CodegenContext = createContext<CodegenContextType | undefined>(undefined);

export function CodegenProvider({ children }: CodegenProviderProps) {
  const [framework, setFramework] = useState<IFrontEndFrameworkOption>();

  const [uiLibrary, setUiLibrary] = useState<string | undefined>();

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

  const sendRequest = async () => {
    setLoading(true);
    try {
      const response: OpenPromptResponse = await openPromptService(fullPrompt, llm, 0.7);
      addResult(JSON.parse(response));
    } catch (error) {
      console.error('Error sending request:', error);
    } finally {
      setLoading(false);
    }
  };

  const addSpecialRequest = (request: ISpecialRequest) => {
    setSpecialRequests([request].concat(specialRequests));
  };

  const removeSpecialRequest = (requestId: string) => {
    const newList = specialRequests.filter((sr) => sr.id !== requestId);
    setSpecialRequests(newList);
  };

  const addResult = (result: ICodeGenResponse) => {
    const newHistory = [result].concat(
      resultHistory.filter((rh) => rh.code.join('') !== result.code.join('')),
    );
    setResultHistory(newHistory);
  };

  const setCodeGenContext = (codeGen: ICodeGen) => {
    const frameworkOption = FrontEndFrameworkOptions.filter(
      (c) => c.framework === codeGen.request.framework,
    );

    const specialRequests = SpecialRequestOptions.filter((sro) =>
      codeGen.request.specialRequests?.includes(sro.prompt),
    );
    setFramework(frameworkOption[0] ?? undefined);
    setUiLibrary(codeGen.request.uiLibrary);
    setSpecialRequests(specialRequests);
    setCodeExample(codeGen.request.codeExample);
    setPrompt(codeGen.request.prompt ?? '');
    addResult(codeGen.response);
    setResultViewIndex(0);
    setLlm(codeGen.request.llmOption);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      buildPrompt();
    }, 300);
    return () => clearTimeout(timeout);
  }, [framework, prompt, uiLibrary, specialRequests, codeExample]);

  useEffect(() => {
    console.log('codegen context updated', fullPrompt);
  }, [fullPrompt]);

  const buildPrompt = () => {
    const parts = [
      `Please help me write some code!`,
      `Format the response json as: ${CodeGenResponseStructure}.`,
      framework ? `Use framework: ${framework.framework}.` : '',
      uiLibrary ? `Use UI library: ${uiLibrary}.` : '',
      prompt ? `${prompt}.` : '',
      specialRequests.map((sr) => sr.prompt).join('\n'),
      codeExample ? `\n${codeExample}` : '',
    ];

    setFullPrompt(parts.filter(Boolean).join('\n').trim());
  };

  const value = useMemo(
    () => ({
      framework,
      setFramework,
      specialRequests,
      setSpecialRequests,
      addSpecialRequest,
      removeSpecialRequest,
      codeExample,
      setCodeExample,
      uiLibrary,
      setUiLibrary,
      prompt,
      setPrompt,
      sendRequest,
      loading,
      fullPrompt,
      llmOption: llm,
      setLlmOption: setLlm,
      resultHistory,
      addResult,
      resultViewIndex,
      setResultViewIndex,
      setCodeGenContext,
    }),
    [
      framework,
      specialRequests,
      codeExample,
      uiLibrary,
      prompt,
      loading,
      fullPrompt,
      llm,
      resultHistory,
      resultViewIndex,
    ],
  );

  return <CodegenContext.Provider value={value}>{children}</CodegenContext.Provider>;
}

export function useCodegenContext(): CodegenContextType {
  const context = useContext(CodegenContext);
  if (!context) {
    throw new Error('useCodegenContext must be used within a CodeGenProvider');
  }
  return context;
}
