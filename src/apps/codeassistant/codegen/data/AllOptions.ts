import { ReactFrameworkOption } from '@/apps/codeassistant/codegen/data/ReactFrameworkOption';
import { AngularFrameworkOption } from '@/apps/codeassistant/codegen/data/AngularFrameworkOption';
import { VueFrameworkOption } from '@/apps/codeassistant/codegen/data/VueFrameworkOption';
import { JavascriptFrameworkOption } from '@/apps/codeassistant/codegen/data/JavascriptFrameworkOption';

export interface IFrontEndFrameworkOption {
  framework: FrameworkType;
  tsOption: boolean;
  uiLibraries: string[];
  syntaxHighlighter?: SyntaxLanguages;
}

export type FrameworkType = 'React' | 'Angular' | 'Vue' | 'Javascript';

export type SyntaxLanguages = 'jsx' | 'tsx' | 'js';

export const FrontEndFrameworkOptions = [
  ReactFrameworkOption,
  AngularFrameworkOption,
  VueFrameworkOption,
  JavascriptFrameworkOption,
];
