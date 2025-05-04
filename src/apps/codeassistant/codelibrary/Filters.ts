import { ICodeGen } from '@/apps/codeassistant/codegen/CodeGen.types';

export const FrameworkMatch = (c1: ICodeGen, c2: ICodeGen): boolean => {
  return c1.request.framework === c2.request.framework;
};

export const UiLibraryMatch = (c1: ICodeGen, c2: ICodeGen): boolean => {
  return c1.request.uiLibrary === c2.request.uiLibrary;
};
