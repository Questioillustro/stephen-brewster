import Typography from '@mui/material/Typography';
import InfoModal from '@/apps/modal/InfoModal';
import { BuildAventureDescription } from '@/apps/modal/BuildAventureDescription';
import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

export const AboutBuildAVenture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Box>
      <IconButton onClick={handleOpenModal}>
        <Typography variant={'h5'} color={'primary'}>
          About <HelpIcon />
        </Typography>
      </IconButton>

      <InfoModal
        title='Welcome to Build-A-Venture!'
        content={<BuildAventureDescription />}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </Box>
  );
};
