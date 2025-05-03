import { Box, Chip, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

export const SpecialRequestsChipDisplay = () => {
  const context = useCodegenContext();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      {(context.codeGen.request.specialRequests ?? []).map((option) => (
        <Chip
          key={option}
          label={option}
          deleteIcon={
            <IconButton size='small'>
              <CloseIcon fontSize='small' />
            </IconButton>
          }
          onDelete={() => context.removeSpecialRequest(option)}
        />
      ))}
    </Box>
  );
};
