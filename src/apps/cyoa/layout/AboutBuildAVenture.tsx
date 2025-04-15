import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoModal from '@/apps/cyoa/components/modal/InfoModal';
import { BuildAventureDescription } from '@/apps/cyoa/components/modal/BuildAventureDescription';
import React, { useState } from 'react';
import { Box } from '@mui/material';

export const AboutBuildAVenture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Box>
      <Button onClick={handleOpenModal} sx={{ width: '100%' }} variant={'contained'}>
        <Typography variant={'h5'} color={'darkslategrey'}>
          About this App
        </Typography>
      </Button>

      <InfoModal
        title='Welcome to Build-A-Venture!'
        content={<BuildAventureDescription />}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </Box>
  );
};
