import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { IconButton, Paper } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { CodeAssistantDescription } from '@/apps/codeassistant/CodeAssistantDescription';
import InfoModal from '@/components/modal/InfoModal';

export const AboutCodeAssistant = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Paper elevation={2} sx={{ display: 'flex', width: '100%', justifyContent: 'end' }}>
      <IconButton onClick={handleOpenModal}>
        <Typography variant={'h5'} color={'primary'}>
          <HelpIcon />
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
