import React from 'react';
import { Stack, Button, Pagination, Paper, Box } from '@mui/material';
import DynamicTabs from '@/apps/codeassistant/codegen/components/codedisplay/DynamicTabs';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { SaveCodeGenButton } from '@/apps/codeassistant/codegen/service/SaveCodeGenButton';
import { AddToCodeExampleButton } from '@/apps/codeassistant/codegen/components/codeexample/AddToCodeExampleButton';

export const ResultHistoryDisplay: React.FC = () => {
  const context = useCodegenContext();

  const totalPages = Math.ceil((context.resultHistory.length ?? 1) / 1);

  if (context.resultHistory.length == 0) return <></>;

  return (
    <Paper elevation={2} sx={{ pt: 1 }}>
      <Stack spacing={2} sx={{ alignItems: 'center', mt: 2, minHeight: '600px' }}>
        <Stack sx={{ flexDirection: 'row', gap: 2 }}>
          <SaveCodeGenButton />

          <AddToCodeExampleButton />
        </Stack>

        <Stack direction='row' spacing={2} justifyContent='center'>
          <Button
            onClick={() => context.setResultViewIndex(Math.max(0, context.resultViewIndex - 1))}
            disabled={context.resultViewIndex === 0}
          >
            Previous
          </Button>

          <Pagination
            count={totalPages}
            page={context.resultViewIndex + 1}
            onChange={(event, page) => context.setResultViewIndex(page - 1)}
            variant='outlined'
          />

          <Button
            onClick={() =>
              context.setResultViewIndex(Math.min(totalPages - 1, context.resultViewIndex + 1))
            }
            disabled={context.resultViewIndex === totalPages - 1}
          >
            Next
          </Button>
        </Stack>

        <DynamicTabs code={context.resultHistory[context.resultViewIndex].response.code} />
      </Stack>
    </Paper>
  );
};
