import { IFrontEndFrameworkOption } from '@/apps/codeassistant/codegen/CodeGen.types';

export const ReactFrameworkOption: IFrontEndFrameworkOption = {
  framework: 'React',
  uiLibraries: ['Material-UI', 'Ant Design', 'Chakra UI', 'React Bootstrap', 'Tailwind UI'],
  syntaxHighlighter: 'jsx',
};
