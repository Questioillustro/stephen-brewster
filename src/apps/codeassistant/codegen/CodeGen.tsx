import { Paper, Stack } from '@mui/material';
import FrontEndComponent from '@/apps/codeassistant/codegen/FrontEndComponent';
import CodeTabs from '@/apps/codeassistant/codegen/components/CodeTabs';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

export const CodeGen = () => {
  const context = useCodegenContext();

  return (
    <Stack
      direction={'column'}
      sx={{ gap: 2, p: 2, fontSize: { xs: '8px', sm: '10px', md: '16px' } }}
    >
      <FrontEndComponent />

      <Paper elevation={2} sx={{ p: 0 }}>
        {context.codeDisplay && !context.loading && <CodeTabs />}
      </Paper>
    </Stack>
  );
};
