import { TextField } from '@mui/material';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

const PromptField = () => {
  const context = useCodegenContext();

  return (
    <TextField
      id='outlined-basic'
      label='Main Prompt'
      placeholder={'Enter a detailed request... '}
      variant='outlined'
      value={context.codeGen.request.prompt}
      multiline
      rows={3}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        context.updatePrompt(event.target.value);
      }}
      sx={{ width: '100%' }}
    />
  );
};

export default PromptField;
