import { LlmOptionType } from '@/apps/codeassistant/codegen/context/CodegenContext';

export interface ILlmOption {
  value: LlmOptionType;
  label: string;
  available?: boolean;
}

export const llmOptions: ILlmOption[] = [
  {
    value: 'grok',
    label: 'Grok',
    available: true,
  },
  {
    value: 'chatgpt',
    label: 'ChatGPT',
    available: true,
  },
  {
    value: 'claude',
    label: 'Claude',
    available: false,
  },
];
