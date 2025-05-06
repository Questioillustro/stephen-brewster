import React, { useCallback, useRef, useEffect, useState } from 'react';
import { Modal, Button, Stack } from '@mui/material';
import {
  StyledModalContent,
  StyledTextareaWrapper,
} from '@/apps/codeassistant/codegen/components/modals/TextFieldModal.styles';

export const CodeReviewOptionsModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, handleClickOutside]);

  return (
    <Stack>
      <Button onClick={handleOpen}>Code Review</Button>
      <Modal open={open} closeAfterTransition>
        <StyledModalContent ref={modalRef} onClick={(e) => e.stopPropagation()}>
          <StyledTextareaWrapper>Code review</StyledTextareaWrapper>
          <Button onClick={handleClose} variant='contained' color='primary' fullWidth>
            Close
          </Button>
        </StyledModalContent>
      </Modal>
    </Stack>
  );
};
