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

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : null;
  };

  return (
    <Paper
      elevation={2}
      sx={{
        border: selected ? `2px solid` : 'none',
        borderColor: selected ? (theme) => theme.palette.primary.main : '',
        backgroundColor: selected
          ? (theme) => {
              const rgb = hexToRgb(theme.palette.primary.main);
              return rgb ? `rgba(${rgb}, 0.1)` : theme.palette.primary.main;
            }
          : '',
        p: 2,
      }}
    >
      <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ p: 1 }}>
          <UserPrompt prompt={props.item.request.prompt} />
        </Box>

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
