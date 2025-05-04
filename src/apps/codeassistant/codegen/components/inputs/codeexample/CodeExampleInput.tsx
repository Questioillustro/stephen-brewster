import React, { useState, useCallback } from 'react';
import { IconButton, Stack, Box, useTheme } from '@mui/material';
import { Subject, Clear } from '@mui/icons-material';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { TextFieldModal } from '@/apps/codeassistant/codegen/components/inputs/textfieldmodal/TextFieldModal';

const CodeExampleInput: React.FC = () => {
  const [open, setOpen] = useState(false);
  const context = useCodegenContext();
  const theme = useTheme();

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleClear = () => context.updateCodeExample('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    context.updateCodeExample(event.target.value);
  const isCodeExamplePopulated =
    context.codeGen.request.codeExample && context.codeGen.request.codeExample !== '';

  return (
    <Box>
      <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <IconButton
          onClick={handleOpen}
          color={isCodeExamplePopulated ? 'primary' : 'default'}
          aria-label='Add code example'
        >
          <Subject
            sx={{
              fontSize: 50,
              opacity: isCodeExamplePopulated ? 1 : 0.5,
              filter: isCodeExamplePopulated
                ? `drop-shadow(0 0 8px ${theme.palette.primary.main})`
                : 'none',
            }}
          />
        </IconButton>
        {isCodeExamplePopulated && (
          <IconButton onClick={handleClear} aria-label='Clear code example' sx={{ ml: 0 }}>
            <Clear sx={{ fontSize: 20 }} />
          </IconButton>
        )}
      </Stack>

      <TextFieldModal
        open={open}
        text={context.codeGen.request.codeExample ?? ''}
        onClose={handleClose}
        onChange={handleChange}
      />
    </Box>
  );
};

export default CodeExampleInput;
