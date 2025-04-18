﻿import { TextField, IconButton, Box, Popover, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { useState } from 'react';

const PromptDisplay = () => {
  const { fullPrompt } = useCodegenContext();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCopy = (event) => {
    navigator.clipboard.writeText(fullPrompt);
    setAnchorEl(event.currentTarget);
    setTimeout(() => setAnchorEl(null), 2000); // Close after 2 seconds
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <TextField
        multiline
        rows={10}
        value={fullPrompt}
        label={'Full Prompt'}
        sx={{ width: '100%', height: '100%' }}
      />
      <IconButton
        onClick={handleCopy}
        size='small'
        sx={{ position: 'absolute', top: 0, right: 0 }}
        title='Copy to clipboard'
      >
        <ContentCopyIcon fontSize='small' />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 1 }}>Copied!</Typography>
      </Popover>
    </Box>
  );
};

export default PromptDisplay;
