import FrontEndComponent from '@/apps/codeassistant/codegen/FrontEndComponent';
import { CodegenProvider } from '@/apps/codeassistant/codegen/context/CodegenContext';
import AppHeader from '@/layout/apps/AppHeader';
import { Stack } from '@mui/material';
import { AboutCodeAssistant } from '@/apps/codeassistant/AboutCodeAssistant';

const CodeAssistant = () => {
  return (
    <CodegenProvider>
      <Stack direction={'column'} sx={{ display: 'flex', width: '100%' }}>
        <AppHeader about={<AboutCodeAssistant />} />
        <FrontEndComponent />
      </Stack>
    </CodegenProvider>
  );
};

export default CodeAssistant;
