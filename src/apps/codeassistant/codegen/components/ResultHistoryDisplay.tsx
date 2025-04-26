import React from 'react';
import { Stack, Button, Pagination } from '@mui/material';
import DynamicTabs from '@/apps/codeassistant/codegen/components/DynamicTabs';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

export const ResultHistoryDisplay: React.FC = () => {
  const context = useCodegenContext();

  const totalPages = Math.ceil(context.resultHistory.length / 1);

  return (
    <Stack spacing={2} sx={{ alignItems: 'center', mt: 2, minHeight: '600px' }}>
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
      <DynamicTabs code={context.resultHistory[context.resultViewIndex].code} />
    </Stack>
  );
};
