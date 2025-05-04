import React, { useState, useCallback } from 'react';
import { IconButton, Stack, Box, useTheme, Tooltip } from '@mui/material';
import { Subject, Clear, ContentPaste } from '@mui/icons-material';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { CodeDisplayModal } from '@/apps/codeassistant/codegen/components/modals/CodeDisplayModal';

const CodeExampleInput: React.FC = () => {
  const [open, setOpen] = useState(false);
  const context = useCodegenContext();
  const theme = useTheme();

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleClear = () => context.updateCodeExample('');
  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    context.updateCodeExample(text);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    context.updateCodeExample(event.target.value);
  const isCodeExamplePopulated =
    context.codeGen.request.codeExample && context.codeGen.request.codeExample !== '';

  return (
    <Box>
      <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Tooltip title='Paste code from clipboard' placement='top'>
          <IconButton onClick={handlePaste} aria-label='Paste code example' sx={{ ml: 0 }}>
            <ContentPaste sx={{ fontSize: 20 }} />
          </IconButton>
        </Tooltip>

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
              animation: isCodeExamplePopulated ? 'pulse 1.5s ease-in-out infinite' : 'none',
              '@keyframes pulse': {
                '0%': {
                  filter: `drop-shadow(0 0 8px ${theme.palette.primary.main})`,
                  transform: 'scale(1)',
                  opacity: 1,
                },
                '50%': {
                  filter: `drop-shadow(0 0 16px ${theme.palette.primary.main})`,
                  transform: 'scale(1.1)',
                  opacity: 0.9,
                },
                '100%': {
                  filter: `drop-shadow(0 0 8px ${theme.palette.primary.main})`,
                  transform: 'scale(1)',
                  opacity: 1,
                },
              },
            }}
          />
        </IconButton>

        <Tooltip title='Clear code example' placement='top'>
          <IconButton onClick={handleClear} aria-label='Clear code example' sx={{ ml: 0 }}>
            <Clear sx={{ fontSize: 20 }} />
          </IconButton>
        </Tooltip>
      </Stack>

      <CodeDisplayModal
        open={open}
        text={context.codeGen.request.codeExample ?? ''}
        onClose={handleClose}
        onChange={handleChange}
      />
    </Box>
  );
};

export default CodeExampleInput;
