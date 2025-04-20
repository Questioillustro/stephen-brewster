import Typography from '@mui/material/Typography';
import InfoModal from '@/apps/modal/InfoModal';
import React, { useState } from 'react';
import { IconButton, Paper } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { CodeAssistantDescription } from '@/apps/codeassistant/CodeAssistantDescription';

export const AboutCodeAssistant = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Paper elevation={2} sx={{ display: 'flex', width: '100%', justifyContent: 'end' }}>
      <IconButton onClick={handleOpenModal}>
        <Typography variant={'h5'} color={'primary'}>
          About <HelpIcon />
        </Typography>
      </IconButton>

      <InfoModal
        title='Welcome to Code Assistant!'
        content={<CodeAssistantDescription />}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </Paper>
  );
};
