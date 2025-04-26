import { TextField } from '@mui/material';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

const PromptField = () => {
  const { prompt, setPrompt } = useCodegenContext();

  return (
    <TextField
      id='outlined-basic'
      label='Main Prompt'
      placeholder={'Enter a detailed request... '}
      variant='outlined'
      value={prompt}
      multiline
      rows={3}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt(event.target.value);
      }}
      sx={{ width: '100%' }}
    />
  );
};

export default PromptField;
