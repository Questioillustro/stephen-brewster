import React, { useState } from 'react';
import { Modal, TextField, Button, IconButton, Paper } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

const CodeExampleInput: React.FC = () => {
  const [open, setOpen] = useState(false);

  const context = useCodegenContext();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    context.setCodeExample(event.target.value);
  };

  return (
    <Paper elevation={2}>
      <IconButton onClick={handleOpen} color='primary'>
        <Add style={{ fontSize: '50px' }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        componentsProps={{
          backdrop: {
            style: { backgroundColor: 'transparent' }, // Remove overlay opacity
          },
        }}
        style={{ pointerEvents: 'none' }} // Allow clicks to pass through to background
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '600px',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Softer shadow
            padding: '20px',
            backgroundColor: '#000', // Fully opaque modal
            pointerEvents: 'auto', // Modal captures clicks
          }}
        >
          <TextField
            variant='outlined'
            value={context.codeExample}
            multiline
            fullWidth
            rows={8}
            onChange={handleChange}
            placeholder='Code example...'
          />
          <Button
            onClick={handleClose}
            variant='contained'
            color='primary'
            style={{ marginTop: '20px' }}
          >
            Close
          </Button>
        </div>
      </Modal>
    </Paper>
  );
};

export default CodeExampleInput;
