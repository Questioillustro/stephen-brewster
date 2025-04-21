import Typography from '@mui/material/Typography';
import InfoModal from '@/apps/modal/InfoModal';
import React, { useState } from 'react';
import { IconButton, Paper } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { NotWordleDescription } from '@/apps/wordle/NotWordleDescription';

export const AboutNotWordle = () => {
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
        title='Welcome to Not Wordle!'
        content={<NotWordleDescription />}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </Paper>
  );
};
