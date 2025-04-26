import Typography from '@mui/material/Typography';
import { BuildAventureDescription } from './BuildAventureDescription';
import React, { useState } from 'react';
import { IconButton, Stack } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import InfoModal from '@/components/modal/InfoModal';

export const AboutBuildAVenture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <IconButton onClick={handleOpenModal}>
        <Typography variant={'h5'} color={'primary'}>
          <HelpIcon />
        </Typography>
      </IconButton>

      <InfoModal
        title='Welcome to Build-A-Venture!'
        content={<BuildAventureDescription />}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </Stack>
  );
};
