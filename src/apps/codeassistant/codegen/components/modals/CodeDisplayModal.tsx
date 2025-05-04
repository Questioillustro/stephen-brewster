import React, { useCallback, useRef } from 'react';
import { Modal, TextField, Button, Box } from '@mui/material';
import { StyledModalContent, StyledTextareaWrapper } from './TextFieldModal.styles';
import CodeBlock from '@/components/codedisplay/CodeBlock';

interface CodeExampleModalProps {
  open: boolean;
  text: string;
  onClose: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CodeDisplayModal: React.FC<CodeExampleModalProps> = ({
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
          <CodeBlock code={text} />
        </StyledTextareaWrapper>
        <Button onClick={onClose} variant='contained' color='primary' fullWidth>
          Close
        </Button>
      </StyledModalContent>
    </Modal>
  );
};
