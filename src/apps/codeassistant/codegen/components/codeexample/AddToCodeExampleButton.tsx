import Button from '@mui/material/Button';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

export const AddToCodeExampleButton = () => {
  const context = useCodegenContext();

  const add = () => {
    const example = context.resultHistory[context.resultViewIndex].response.code
      .map((c) => c.content)
      .join('\n\n');
    context.updateCodeExample(example);
  };

  return (
    <Button onClick={add} variant={'outlined'} color={'secondary'}>
      Use As Example
    </Button>
  );
};
