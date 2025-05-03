import Button from '@mui/material/Button';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { SaveCode } from '@/apps/codeassistant/codegen/service/CodeGenService';

export const SaveCodeGenButton = () => {
  const context = useCodegenContext();

  const save = () => {
    SaveCode(context.codeGen).then(() => console.log('saved'));
  };

  const isSaveCodeGenDisabled = (): boolean => {
    return !context.codeGen || !context.codeGen.response;
  };

  return (
    <Button onClick={save} variant={'contained'} disabled={isSaveCodeGenDisabled()}>
      Save
    </Button>
  );
};
