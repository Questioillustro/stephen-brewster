import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { OpenPromptResponse, openPromptService } from '@/service/OpenPromptService';
import {
  DefaultSpecialRequestOptions,
  SpecialRequestOptions,
} from '@/apps/codeassistant/codegen/components/inputs/specialrequests/SpecialRequests.types';
import {
  CodeGenResponseStructure,
  ICodeGen,
  ICodeGenResponse,
} from '@/apps/codeassistant/codegen/CodeGen.types';

interface CodegenContextType {
  codeGen: ICodeGen;
  updateCodeGen: (updates: Partial<ICodeGen>) => void;
  sendRequest: () => void;
  loading: boolean;
  fullPrompt: string;
  addSpecialRequest: (request: string) => void;
  removeSpecialRequest: (prompt: string) => void;
  resultHistory: ICodeGen[];
  addResult: (result: ICodeGen) => void;
  resultViewIndex: number;
  setResultViewIndex: (index: number) => void;
  updateFeFramework: (framework: string) => void;
  //updateUiLibrary: (library: string) => void;
  updateCodeExample: (example: string) => void;
  updatePrompt: (prompt: string) => void;
}

interface CodegenProviderProps {
  children: React.ReactNode;
}

export const CodegenContext = createContext<CodegenContextType | undefined>(undefined);

export function CodegenProvider({ children }: CodegenProviderProps) {
  const [codeGen, setCodeGen] = useState<ICodeGen>({
    request: {
      framework: undefined,
      specialRequests: DefaultSpecialRequestOptions,
      codeExample: undefined,
      uiLibrary: undefined,
      prompt: '',
      llmOption: 'grok',
    },
    response: { code: [] }, // Initialize with empty code array
    notes: [],
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [fullPrompt, setFullPrompt] = useState<string>('');
  const [resultHistory, setResultHistory] = useState<ICodeGen[]>([]);
  const [resultViewIndex, setResultViewIndex] = useState<number>(0);

  const updateCodeGen = (updates: Partial<ICodeGen>) => {
    setCodeGen((prev) => ({ ...prev, ...updates, _id: undefined }));
  };

  const updateFeFramework = (framework: string) => {
    updateCodeGen({ request: { ...codeGen.request, framework: framework, uiLibrary: undefined } });
  };

  const updateCodeExample = (example: string) => {
    updateCodeGen({ ...codeGen, request: { ...codeGen.request, codeExample: example } });
  };

  const updatePrompt = (prompt: string) => {
    updateCodeGen({ ...codeGen, request: { ...codeGen.request, prompt: prompt } });
  };

  const addSpecialRequest = (request: string) => {
    updateCodeGen({
      request: {
        ...codeGen.request,
        specialRequests: [request, ...(codeGen.request.specialRequests || [])],
      },
    });
  };

  const removeSpecialRequest = (prompt: string) => {
    updateCodeGen({
      request: {
        ...codeGen.request,
        specialRequests: (codeGen.request.specialRequests || []).filter((sr) => sr !== prompt),
      },
    });
  };

  const addResult = (result: ICodeGen) => {
    const newHistory = [result].concat(
      resultHistory.filter((rh) => rh.response.code.join('') !== result.response.code.join('')),
    );

    setResultHistory(newHistory);
    setResultViewIndex(0);
  };

  const sendRequest = async () => {
    setLoading(true);
    try {
      const response: OpenPromptResponse = await openPromptService(
        fullPrompt,
        codeGen.request.llmOption,
        0.7,
      );
      const parsedResponse: ICodeGenResponse = JSON.parse(response);
      addResult({ ...codeGen, response: parsedResponse });
      updateCodeGen({ ...codeGen, response: parsedResponse });
    } catch (error) {
      console.error('Error sending request:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      buildPrompt();
    }, 300);
    return () => clearTimeout(timeout);
  }, [codeGen.request]);

  useEffect(() => {
    console.log('codegen updated', codeGen);
  }, [codeGen]);

  useEffect(() => {
    if (resultHistory[resultViewIndex]) setCodeGen(resultHistory[resultViewIndex]);
    console.log('result history updated', resultHistory);
  }, [resultHistory, resultViewIndex]);

  const buildPrompt = () => {
    const parts = [
      `Please help me write some code!`,
      `Format the response json as: ${CodeGenResponseStructure}.`,
      codeGen.request.framework ? `Use framework: ${codeGen.request.framework}.` : '',
      codeGen.request.uiLibrary ? `Use UI library: ${codeGen.request.uiLibrary}.` : '',
      codeGen.request.prompt ? `${codeGen.request.prompt}.` : '',
      codeGen.request.specialRequests?.join('\n') || '',
      codeGen.request.codeExample ? `\n${codeGen.request.codeExample}` : '',
    ];

    setFullPrompt(parts.filter(Boolean).join('\n').trim());
  };

  const value = useMemo(
    () => ({
      codeGen,
      updateCodeGen,
      sendRequest,
      loading,
      fullPrompt,
      addSpecialRequest,
      removeSpecialRequest,
      resultHistory,
      addResult,
      resultViewIndex,
      setResultViewIndex,
      updateCodeExample,
      updatePrompt,
      updateFeFramework,
    }),
    [codeGen, loading, fullPrompt, resultHistory, resultViewIndex],
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
