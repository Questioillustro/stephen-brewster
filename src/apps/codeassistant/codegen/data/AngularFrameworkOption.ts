import { IFrontEndFrameworkOption } from '@/apps/codeassistant/codegen/CodeGen.types';

export const AngularFrameworkOption: IFrontEndFrameworkOption = {
  framework: 'Angular',
  uiLibraries: [
    'Angular Material',
    'NG Bootstrap',
    'PrimeNG',
    'NGX-Bootstrap',
    'Clarity Design System',
  ],
  syntaxHighlighter: 'tsx',
};
