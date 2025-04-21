import { createContext, useContext, useEffect, useState } from 'react';
import { IFrontEndFrameworkOption } from '@/apps/codeassistant/codegen/data/AllOptions';
import { ReactOptions } from '@/apps/codeassistant/codegen/data/ReactOptions';
import { OpenPromptResponse, openPromptService } from '@/service/OpenPromptService';

interface CodegenContextType {
  framework: IFrontEndFrameworkOption;
  addFramework: (framework: IFrontEndFrameworkOption) => void;
  useTypescript: boolean;
  setUseTypescript: (isTypescript: boolean) => void;
  inclComments: boolean;
  setInclComments: (inclComments: boolean) => void;
  separateStyles: boolean;
  setSeparateStyles: (separateStyles: boolean) => void;
  uiLibrary: string;
  addUiLibrary: (library: string) => void;
  prompt: string;
  addPrompt: (prompt: string) => void;
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

export type LlmOptionType = 'grok' | 'chatgpt';

export const CodegenContext = createContext<CodegenContextType | undefined>(undefined);

export function CodegenProvider({ children }) {
  const [framework, setFramework] = useState<IFrontEndFrameworkOption>(ReactOptions);

  const [useTypescript, setUseTypescript] = useState<boolean>(true);

  const [uiLibrary, setUiLibrary] = useState<string>('');

  const [inclComments, setInclComments] = useState<boolean>(false);

  const [separateStyles, setSeparateStyles] = useState<boolean>(false);

  const [prompt, setPrompt] = useState<string>('');

  const [codeDisplay, setCodeDisplay] = useState<CodegenResponse>();

  const [loading, setLoading] = useState<boolean>(false);

  const [fullPrompt, setFullPrompt] = useState<string>('');

  const [llm, setLlm] = useState<LlmOptionType>('chatgpt');

  const addFramework = (framework: IFrontEndFrameworkOption) => {
    console.log('adding framework', framework);
    setFramework(framework);
  };

  const toggleTypescript = (isTypescript: boolean) => {
    console.log('toggling typescript', isTypescript);
    setUseTypescript(isTypescript);
  };

  const toggleComments = (isComments: boolean) => {
    console.log('toggling comments', inclComments);
    setInclComments(isComments);
  };

  const toggleSeparateStyles = (isSeparate: boolean) => {
    console.log('toggling separate styles', isSeparate);
    setSeparateStyles(isSeparate);
  };

  const addUiLibrary = (library: string) => {
    console.log('adding ui library', library);
    setUiLibrary(library);
  };

  const addPrompt = (prompt: string) => {
    console.log('adding prompt', prompt);
    setPrompt(prompt);
  };

  const setLlmOption = (llm: LlmOptionType) => {
    setLlm(llm);
  };

  const sendRequest = () => {
    setLoading(true);

    openPromptService(fullPrompt, llm, 0.7).then((response: OpenPromptResponse) => {
      setCodeDisplay(JSON.parse(response));
      setLoading(false);
    });
  };

  useEffect(() => {
    buildPrompt();
  }, [framework, prompt, uiLibrary, useTypescript, inclComments, separateStyles]);

  const buildPrompt = () => {
    const basePrompt = separateStyles
      ? `Format the response json as: { code, styles }.`
      : `Format the response json as: { code }.`;
    const frameworkPrompt = `Use framework: ${framework.framework}.`;
    const libraryPrompt = uiLibrary ? `Use UI library: ${uiLibrary}.` : '';
    const typescriptPrompt = useTypescript ? `Use typescript.` : '';
    const separateStylesPrompt = separateStyles
      ? `Separate styles into their own file.`
      : `Use inline styles.`;
    const commentsPrompt = inclComments
      ? `Include detailed comments.`
      : `Do not include any comments.`;
    const userPrompt = prompt ? `${prompt}.` : '';

    const fullPrompt =
      `${frameworkPrompt} ${typescriptPrompt} ${separateStylesPrompt} ${libraryPrompt} ${userPrompt} ${basePrompt} ${commentsPrompt}`.trim();

    setFullPrompt(fullPrompt);
  };

  const value = {
    framework: framework,
    addFramework: addFramework,
    useTypescript: useTypescript,
    setUseTypescript: toggleTypescript,
    inclComments: inclComments,
    setInclComments: toggleComments,
    separateStyles: separateStyles,
    setSeparateStyles: toggleSeparateStyles,
    uiLibrary: uiLibrary,
    addUiLibrary: addUiLibrary,
    prompt: prompt,
    addPrompt: addPrompt,
    sendRequest: sendRequest,
    codeDisplay: codeDisplay,
    loading: loading,
    fullPrompt: fullPrompt,
    llmOption: llm,
    setLlmOption: setLlmOption,
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
