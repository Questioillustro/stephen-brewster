import { Paper, Stack } from '@mui/material';
import FrontEndComponent from '@/apps/codeassistant/codegen/FrontEndComponent';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { PromptInputs } from '@/apps/codeassistant/codegen/PromptInputs';
import { ResultHistoryDisplay } from '@/apps/codeassistant/codegen/components/ResultHistoryDisplay';

export const CodeGen = () => {
  const context = useCodegenContext();

  return (
    <Stack
      direction={'column'}
      sx={{ gap: 2, fontSize: { xs: '8px', sm: '10px', md: '16px' }, width: '100%' }}
    >
      <FrontEndComponent />

      <PromptInputs />

      <Paper elevation={2} sx={{ p: 0, width: '100%' }}>
        {context.resultHistory.length > 0 && <ResultHistoryDisplay />}
      </Paper>
    </Stack>
  );
};
