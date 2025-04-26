import Button from '@mui/material/Button';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { ICodeGenSaveRequest } from '@/apps/codeassistant/codegen/CodeGen.types';
import { SaveCode } from '@/apps/codeassistant/codegen/service/CodeGenService';

export const SaveCodeGenButton = () => {
  const context = useCodegenContext();

  const buildRequest = (): ICodeGenSaveRequest => {
    const request: ICodeGenSaveRequest = {
      prompt: context.prompt,
      llmOption: context.llmOption,
      code: context.resultHistory[context.resultViewIndex],
    };

    if (context.framework) request.framework = context.framework.framework;
    if (context.specialRequests.length > 0)
      request.specialRequests = context.specialRequests.map((sr) => sr.prompt);
    if (context.codeExample) request.codeExample = context.codeExample;
    if (context.uiLibrary) request.uiLibrary = context.uiLibrary;

    return request;
  };

  const buildCodeGen = () => {
    const request = buildRequest();
    const response = context.resultHistory[context.resultViewIndex];
    return {
      request: request,
      response: response,
    };
  };

  const save = () => {
    const codeGen = buildCodeGen();
    SaveCode(codeGen).then(() => console.log('saved'));
  };

  return <Button onClick={save}>Save</Button>;
};
