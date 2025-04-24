import { IFrontEndFrameworkOption } from '@/apps/codeassistant/codegen/data/AllOptions';

export const JavascriptFrameworkOption: IFrontEndFrameworkOption = {
  framework: 'Javascript',
  tsOption: true,
  uiLibraries: ['jQuery UI', 'Webix', 'DHTMLX', 'Syncfusion Essential JS 2', 'Kendo UI'],
  syntaxHighlighter: 'js',
};
