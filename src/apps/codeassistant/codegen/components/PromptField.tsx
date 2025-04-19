import { Input, TextField } from '@mui/material';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { useRef } from 'react';

const PromptField = () => {
  const { prompt, addPrompt } = useCodegenContext();
  const buttonRef = useRef<HTMLButtonElement>(null); // Create a ref for the button

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      // Check for Enter key without Shift
      event.preventDefault(); // Prevent default Enter behavior (e.g., new line)
      buttonRef.current?.click(); // Trigger the button's click event
    }
  };

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
      onKeyDown={handleKeyDown} // Add keydown handler
      sx={{ width: '50%' }}
    />
  );
};

export default PromptField;
