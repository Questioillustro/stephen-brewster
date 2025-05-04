import React, { useCallback, useRef, useEffect } from 'react';
import { Modal, Button } from '@mui/material';
import { StyledModalContent, StyledTextareaWrapper } from './TextFieldModal.styles';
import CodeBlock from '@/components/codedisplay/CodeBlock';

interface ICodeDisplayModalProps {
  open: boolean;
  text: string;
  onClose: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CodeDisplayModal: React.FC<ICodeDisplayModalProps> = (
  props: ICodeDisplayModalProps,
) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        props.onClose();
      }
    },
    [props],
  );

  useEffect(() => {
    if (props.open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [props.open, handleClickOutside]);

  return (
    <Modal open={props.open} closeAfterTransition>
      <StyledModalContent ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <StyledTextareaWrapper>
          <CodeBlock code={props.text} />
        </StyledTextareaWrapper>
        <Button onClick={props.onClose} variant='contained' color='primary' fullWidth>
          Close
        </Button>
      </StyledModalContent>
    </Modal>
  );
};
