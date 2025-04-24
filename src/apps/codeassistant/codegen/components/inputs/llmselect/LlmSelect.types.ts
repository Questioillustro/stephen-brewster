import { LlmOptionType } from '@/apps/codeassistant/codegen/context/CodegenContext';

export interface ILlmOption {
  value: LlmOptionType;
  label: string;
}

export const llmOptions: ILlmOption[] = [
  {
    value: 'grok',
    label: 'Grok',
  },
  {
    value: 'chatgpt',
    label: 'ChatGPT',
  },
];
