import React, { useCallback, useRef } from 'react';
import { Modal, TextField, Button, Box } from '@mui/material';
import { StyledModalContent, StyledTextareaWrapper } from './TextFieldModal.styles';

interface CodeExampleModalProps {
  open: boolean;
  text: string;
  onClose: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextFieldModal: React.FC<CodeExampleModalProps> = ({
  open,
  text,
  onClose,
  onChange,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = useCallback(
    (event: React.MouseEvent) => {
      if (onClose && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <Modal
      open={open}
      onClose={handleBackdropClick}
      closeAfterTransition
      sx={{ pointerEvents: 'none' }}
    >
      <StyledModalContent ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <StyledTextareaWrapper>
          <TextField
            variant='outlined'
            value={text}
            onChange={onChange}
            multiline
            fullWidth
            placeholder='Code example...'
            aria-label='Code example input'
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              '& .MuiInputBase-root': {
                height: '100%',
              },
              '& .MuiOutlinedInput-root': {
                height: '100%',
              },
              '& .MuiInputBase-inputMultiline': {
                height: '100% !important',
                overflow: 'auto !important',
                resize: 'none',
              },
            }}
          />
        </StyledTextareaWrapper>
        <Button onClick={onClose} variant='contained' color='primary' fullWidth>
          Close
        </Button>
      </StyledModalContent>
    </Modal>
  );
};
