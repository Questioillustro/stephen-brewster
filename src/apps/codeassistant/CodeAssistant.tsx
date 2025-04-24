import { CodegenProvider } from '@/apps/codeassistant/codegen/context/CodegenContext';
import AppHeader from '@/layout/apps/AppHeader';
import { Stack } from '@mui/material';
import { AboutCodeAssistant } from '@/apps/codeassistant/AboutCodeAssistant';
import { CodeGen } from '@/apps/codeassistant/codegen/CodeGen';

const CodeAssistant = () => {
  return (
    <CodegenProvider>
      <Stack direction={'column'} sx={{ p: 2, display: 'flex', width: '100%' }}>
        <AppHeader about={<AboutCodeAssistant />} />
        <CodeGen />
      </Stack>
    </CodegenProvider>
  );
};

export default CodeAssistant;
