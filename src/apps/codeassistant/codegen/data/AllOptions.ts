import { ReactOptions } from '@/apps/codeassistant/codegen/data/ReactOptions';
import { AngularOptions } from '@/apps/codeassistant/codegen/data/AngularOptions';
import { VueOptions } from '@/apps/codeassistant/codegen/data/VueOptions';
import { JavascriptOptions } from '@/apps/codeassistant/codegen/data/JavascriptOptions';

export interface IFrontEndFrameworkOption {
  framework: FrameworkType;
  tsOption: boolean;
  uiLibraries: string[];
  syntaxHighlighter?: SyntaxLanguages;
}

export type FrameworkType = 'React' | 'Angular' | 'Vue' | 'Javascript';

export type SyntaxLanguages = 'jsx' | 'tsx' | 'js';

export const FrontEndFrameworkOptions = [
  ReactOptions,
  AngularOptions,
  VueOptions,
  JavascriptOptions,
];
