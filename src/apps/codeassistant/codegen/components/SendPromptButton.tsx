import Button from '@mui/material/Button';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

const SendPromptButton = () => {
  const { sendRequest } = useCodegenContext();
  return (
    <Button variant={'contained'} onClick={sendRequest}>
      Send
    </Button>
  );
};

export default SendPromptButton;
