// ModalComponent.tsx
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalComponent: React.FC<ModalProps> = ({ title, content, open, onClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-title' variant='h6' component='h2' gutterBottom>
            {title}
          </Typography>
          {content}
          <Button onClick={onClose} variant='contained' color='primary' sx={{ marginTop: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
