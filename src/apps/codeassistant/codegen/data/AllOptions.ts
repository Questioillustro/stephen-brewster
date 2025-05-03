import { ReactFrameworkOption } from '@/apps/codeassistant/codegen/data/ReactFrameworkOption';
import { AngularFrameworkOption } from '@/apps/codeassistant/codegen/data/AngularFrameworkOption';
import { VueFrameworkOption } from '@/apps/codeassistant/codegen/data/VueFrameworkOption';
import { JavascriptFrameworkOption } from '@/apps/codeassistant/codegen/data/JavascriptFrameworkOption';

export const FrontEndFrameworkOptions = [
  ReactFrameworkOption,
  AngularFrameworkOption,
  VueFrameworkOption,
  JavascriptFrameworkOption,
];

export const FrontEndFrameworkOptionsLabels = FrontEndFrameworkOptions.map(
  (fefo) => fefo.framework,
);

export const UiLibraryMap = {
  React: ReactFrameworkOption.uiLibraries,
  Angular: AngularFrameworkOption.uiLibraries,
  Vue: VueFrameworkOption.uiLibraries,
  JavaScript: JavascriptFrameworkOption.uiLibraries,
};
