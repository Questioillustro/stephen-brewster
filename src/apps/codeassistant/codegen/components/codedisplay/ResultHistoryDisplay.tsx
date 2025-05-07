import React from 'react';
import { Stack, Button, Pagination } from '@mui/material';
import DynamicTabs from '@/apps/codeassistant/codegen/components/codedisplay/DynamicTabs';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { SaveCodeGenButton } from '@/apps/codeassistant/codegen/service/SaveCodeGenButton';
import { AddToCodeExampleButton } from '@/apps/codeassistant/codegen/components/codeexample/AddToCodeExampleButton';
import { CodeReviewOptionsModal } from '@/apps/codeassistant/codereview/CodeReviewOptionsModal';
import { CAPaperPanel } from '@/apps/codeassistant/components/CAPaperPanel';

export const ResultHistoryDisplay: React.FC = () => {
  const context = useCodegenContext();

  const totalPages = Math.ceil((context.resultHistory.length ?? 1) / 1);

  if (context.resultHistory.length == 0) return <></>;

  return (
    <CAPaperPanel>
      <Stack spacing={2} sx={{ alignItems: 'center', mt: 2 }}>
        <Stack sx={{ flexDirection: 'row', gap: 2 }}>
          <SaveCodeGenButton />

          <AddToCodeExampleButton />

          <CodeReviewOptionsModal />
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
    </CAPaperPanel>
  );
};
