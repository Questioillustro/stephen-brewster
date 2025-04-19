import { createContext, useContext, useState } from 'react';
import { IFrontEndFrameworkOption } from '@/apps/codeassistant/codegen/data/AllOptions';
import { ReactOptions } from '@/apps/codeassistant/codegen/data/ReactOptions';
import { OpenPromptResponse, openPromptService } from '@/service/OpenPromptService';

interface CodegenContextType {
  framework: IFrontEndFrameworkOption;
  addFramework: (framework: IFrontEndFrameworkOption) => void;
  useTypescript: boolean;
  setUseTypescript: (isTypescript: boolean) => void;
  uiLibrary: string;
  addUiLibrary: (library: string) => void;
  prompt: string;
  addPrompt: (prompt: string) => void;
  sendRequest: () => void;
  codeDisplay: string;
  loading: boolean;
}

interface CodegenResponse {
  code: string;
}

export const CodegenContext = createContext<CodegenContextType | undefined>(undefined);

export function CodegenProvider({ children }) {
  const [framework, setFramework] = useState<IFrontEndFrameworkOption>(ReactOptions);

  const [useTypescript, setUseTypescript] = useState<boolean>(false);

  const [uiLibrary, setUiLibrary] = useState<string>('');

  const [prompt, setPrompt] = useState<string>('');

  const [codeDisplay, setCodeDisplay] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  const addFramework = (framework: IFrontEndFrameworkOption) => {
    console.log('adding framework', framework);
    setFramework(framework);
  };

  const addTypescript = (isTypescript: boolean) => {
    console.log('toggling typescript', isTypescript);
    setUseTypescript(isTypescript);
  };

  const addUiLibrary = (library: string) => {
    console.log('adding ui library', library);
    setUiLibrary(library);
  };

  const addPrompt = (prompt: string) => {
    console.log('adding prompt', prompt);
    setPrompt(prompt);
  };

  const sendRequest = () => {
    const basePrompt = `Format the response json as: { code }.`;
    const libraryPrompt = uiLibrary ? `Using ui library: ${uiLibrary}.` : '';
    const typescriptPrompt = useTypescript ? `Using typescript.` : '';
    const fullPrompt =
      `Using framework: ${framework.framework}. ${typescriptPrompt} ${libraryPrompt} ${prompt} ${basePrompt}`.trim();

    console.log('codegen prompt', fullPrompt);

    setLoading(true);

    openPromptService(fullPrompt, 'grok', 0.7).then((response: OpenPromptResponse) => {
      console.log(response);
      setCodeDisplay(JSON.parse(response).code);
      setLoading(false);
    });
  };

  const value = {
    framework: framework,
    addFramework: addFramework,
    useTypescript: useTypescript,
    setUseTypescript: addTypescript,
    uiLibrary: uiLibrary,
    addUiLibrary: addUiLibrary,
    prompt: prompt,
    addPrompt: addPrompt,
    sendRequest: sendRequest,
    codeDisplay: codeDisplay,
    loading: loading,
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
