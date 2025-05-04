import { IconButton, Stack } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { useCallback, useState } from 'react';
import { TextFieldModal } from '@/apps/codeassistant/codegen/components/modals/TextFieldModal';

const PromptDisplay = () => {
  const { fullPrompt } = useCodegenContext();
  const [openModal, setOpenModal] = useState(false);

  const handleClose = useCallback(() => setOpenModal(false), []);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPrompt);
  };

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid',
        borderColor: (theme) => theme.palette.primary.main,
        borderRadius: '0.5rem',
        p: 1,
        gap: 2,
      }}
    >
      <IconButton onClick={handleCopy} size='small' title='Copy to clipboard'>
        <ContentCopyIcon fontSize='small' /> Copy
      </IconButton>

      <IconButton onClick={() => setOpenModal(true)} size='small' title='Open Prompt'>
        <VisibilityIcon fontSize='small' /> View
      </IconButton>

      <TextFieldModal open={openModal} text={fullPrompt} onClose={handleClose} />
    </Stack>
  );
};

export default PromptDisplay;
