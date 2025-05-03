import { Stack, Box, Paper } from '@mui/material';
import { ICodeGen } from '@/apps/codeassistant/codegen/CodeGen.types';
import { UserPrompt } from './UserPrompt';
import { TechStackDisplay } from './TechStackDisplay';
import { DetailsAccordion } from '@/apps/codeassistant/codelibrary/libraryitemcard/DetailsAccordion';
import PillDisplay from '@/apps/codeassistant/codelibrary/libraryitemcard/PillDisplay';
import Button from '@mui/material/Button';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import React, { useEffect, useState } from 'react';

export interface ILibraryItemCardProps {
  item: ICodeGen;
  onSelect: (item: ICodeGen) => void;
}

export const LibraryItemCard = (props: ILibraryItemCardProps) => {
  const context = useCodegenContext();
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    if (!context.resultHistory || !props.item || !context.resultHistory[context.resultViewIndex]) {
      setSelected(false);
    } else {
      setSelected(context.resultHistory[context.resultViewIndex]._id === props.item._id);
    }
  }, [context, props.item]);

  return (
    <Paper
      elevation={2}
      sx={{
        border: selected ? '2px solid #1976d2' : 'none',
        backgroundColor: selected ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
        p: 2,
      }}
    >
      <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
        <UserPrompt prompt={props.item.request.prompt} />

        <Button
          variant={'contained'}
          onClick={() => props.onSelect(props.item)}
          sx={{ height: '100%' }}
        >
          Load
        </Button>
      </Stack>

      <Stack direction={'row'} sx={{ gap: 1 }}>
        <TechStackDisplay
          framework={props.item.request.framework ?? undefined}
          uiLibrary={props.item.request.uiLibrary ?? undefined}
        />

        <PillDisplay label={props.item.request.llmOption} color={'secondary'} />
      </Stack>

      <Box sx={{ pt: 1 }}>
        <DetailsAccordion request={props.item.request} />
      </Box>
    </Paper>
  );
};
