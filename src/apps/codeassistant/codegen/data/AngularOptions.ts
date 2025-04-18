﻿import { IFrontEndFrameworkOption } from '@/apps/codeassistant/codegen/data/AllOptions';

export const AngularOptions: IFrontEndFrameworkOption = {
  framework: 'Angular',
  tsOption: false,
  uiLibraries: [
    'Angular Material',
    'NG Bootstrap',
    'PrimeNG',
    'NGX-Bootstrap',
    'Clarity Design System',
  ],
  syntaxHighlighter: 'tsx',
};
