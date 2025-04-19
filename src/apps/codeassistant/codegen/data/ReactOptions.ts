import { IFrontEndFrameworkOption } from '@/apps/codeassistant/codegen/data/AllOptions';

export const ReactOptions: IFrontEndFrameworkOption = {
  framework: 'React',
  tsOption: true,
  uiLibraries: ['Material-UI', 'Ant Design', 'Chakra UI', 'React Bootstrap', 'Tailwind UI'],
  syntaxHighlighter: 'jsx',
};
