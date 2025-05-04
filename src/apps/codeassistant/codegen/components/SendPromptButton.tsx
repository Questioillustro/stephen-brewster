import Button from '@mui/material/Button';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import Spinner from '@/apps/codeassistant/codegen/components/Spinner';

const SendPromptButton = () => {
  const { sendRequest, loading } = useCodegenContext();
  return (
    <Button variant={'contained'} onClick={sendRequest} disabled={loading}>
      {loading && <Spinner />}
      {!loading && 'SEND'}
    </Button>
  );
};

export default SendPromptButton;
