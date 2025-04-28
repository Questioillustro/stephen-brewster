import React, { useState, useCallback } from 'react';
import { Paper, IconButton, Stack, Box } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { TextFieldModal } from '@/apps/codeassistant/codegen/components/inputs/textfieldmodal/TextFieldModal';
import { ComponentTitle } from '@/apps/codeassistant/codegen/components/ComponentTitle';

const CodeExampleInput: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { codeExample, setCodeExample } = useCodegenContext();

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCodeExample(event.target.value);
    },
    [setCodeExample],
  );

  return (
    <Box>
      <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <IconButton onClick={handleOpen} color='primary' aria-label='Add code example'>
          <Add sx={{ fontSize: 50 }} />
        </IconButton>
      </Stack>

      <TextFieldModal
        open={open}
        text={codeExample ?? ''}
        onClose={handleClose}
        onChange={handleChange}
      />
    </Box>
  );
};

export default CodeExampleInput;
