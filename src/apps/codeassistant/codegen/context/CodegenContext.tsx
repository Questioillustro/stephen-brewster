import { createContext, useContext, useEffect, useState } from 'react';
import { IFrontEndFrameworkOption } from '@/apps/codeassistant/codegen/data/AllOptions';
import { OpenPromptResponse, openPromptService } from '@/service/OpenPromptService';
import {
  DefaultSpecialRequestOptions,
  ISpecialRequest,
} from '@/apps/codeassistant/codegen/components/inputs/specialrequests/SpecialRequests.types';

interface CodegenContextType {
  framework: IFrontEndFrameworkOption | undefined;
  setFramework: (framework: IFrontEndFrameworkOption) => void;
  useTypescript: boolean;
  setUseTypescript: (isTypescript: boolean) => void;
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
  codeDisplay: CodegenResponse | undefined;
  loading: boolean;
  fullPrompt: string;
  llmOption: LlmOptionType;
  setLlmOption: (llm: LlmOptionType) => void;
}

interface CodegenResponse {
  code: string;
  styles: string;
}

export type LlmOptionType = 'grok' | 'chatgpt' | 'claude';

export const CodegenContext = createContext<CodegenContextType | undefined>(undefined);

export function CodegenProvider({ children }) {
  const [framework, setFramework] = useState<IFrontEndFrameworkOption>();

  const [uiLibrary, setUiLibrary] = useState<string>('');

  const [useTypescript, setUseTypescript] = useState<boolean>(true);

  const [specialRequests, setSpecialRequests] = useState<ISpecialRequest[]>(
    DefaultSpecialRequestOptions,
  );

  const [codeExample, setCodeExample] = useState<string | undefined>();

  const [prompt, setPrompt] = useState<string>('');

  const [codeDisplay, setCodeDisplay] = useState<CodegenResponse>();

  const [loading, setLoading] = useState<boolean>(false);

  const [fullPrompt, setFullPrompt] = useState<string>('');

  const [llm, setLlm] = useState<LlmOptionType>('chatgpt');

  const toggleTypescript = (isTypescript: boolean) => {
    console.log('toggling typescript', isTypescript);
    setUseTypescript(isTypescript);
  };

  const sendRequest = () => {
    setLoading(true);

    openPromptService(fullPrompt, llm, 0.7).then((response: OpenPromptResponse) => {
      setCodeDisplay(JSON.parse(response));
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

  useEffect(() => {
    buildPrompt();
  }, [framework, prompt, uiLibrary, useTypescript, specialRequests, codeExample]);

  useEffect(() => {
    console.log('codegen context updated', fullPrompt);
  }, [fullPrompt]);

  const buildPrompt = () => {
    const basePrompt = `Format the response json as: { code }.`;
    const frameworkPrompt = framework ? `Use framework: ${framework.framework}.` : '';
    const libraryPrompt = uiLibrary ? `Use UI library: ${uiLibrary}.` : '';
    const typescriptPrompt = useTypescript ? `Use typescript.` : '';
    const userPrompt = prompt ? `${prompt}.` : '';
    const codeExamplePrompt = codeExample ? codeExample : '';

    const specialRequestsPrompt = specialRequests.map((sr) => sr.prompt).join(' ');

    const fullPrompt =
      `${frameworkPrompt} ${typescriptPrompt} ${libraryPrompt} ${userPrompt} ${basePrompt} ${specialRequestsPrompt} \n\n${codeExamplePrompt}`.trim();

    setFullPrompt(fullPrompt);
  };

  const value = {
    framework: framework,
    setFramework: setFramework,
    useTypescript: useTypescript,
    setUseTypescript: toggleTypescript,
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
    codeDisplay: codeDisplay,
    loading: loading,
    fullPrompt: fullPrompt,
    llmOption: llm,
    setLlmOption: setLlm,
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
