import { Paper, Stack } from '@mui/material';
import FrontEndComponent from '@/apps/codeassistant/codegen/FrontEndComponent';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { PromptInputs } from '@/apps/codeassistant/codegen/PromptInputs';
import DynamicTabs from '@/apps/codeassistant/codegen/components/DynamicTabs';

export const CodeGen = () => {
  const context = useCodegenContext();

  return (
    <Stack direction={'column'} sx={{ gap: 2, fontSize: { xs: '8px', sm: '10px', md: '16px' } }}>
      <FrontEndComponent />

      <PromptInputs />

      <Paper elevation={2} sx={{ p: 0 }}>
        {context.resultHistory.length > 0 && !context.loading && (
          <DynamicTabs code={context.resultHistory[0].code} />
        )}
      </Paper>
    </Stack>
  );
};
