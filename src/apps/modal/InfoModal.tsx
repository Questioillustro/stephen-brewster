// ModalComponent.tsx
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

interface ModalProps {
  title: string;
  content: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '70%', sm: '100%', md: '80%' },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalComponent: React.FC<ModalProps> = ({ title, content, open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      <Stack sx={style}>
        <Typography id='modal-title' variant='h6' component='h2' gutterBottom>
          {title}
        </Typography>
        {content}
        <Button onClick={onClose} variant='contained' color='primary' sx={{ marginTop: 2 }}>
          Close
        </Button>
      </Stack>
    </Modal>
  );
};

export default ModalComponent;
