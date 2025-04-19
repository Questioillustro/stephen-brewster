import { TextField } from '@mui/material';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

const PromptField = () => {
  const { prompt, addPrompt } = useCodegenContext();

  return (
    <TextField
      id='outlined-basic'
      label='Prompt'
      variant='outlined'
      value={prompt}
      multiline
      rows={3}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        addPrompt(event.target.value);
      }}
      sx={{ width: '100%' }}
    />
  );
};

export default PromptField;
