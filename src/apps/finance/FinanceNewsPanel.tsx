import { Paper } from '@mui/material';
import FinanceDataGrid from '@/apps/finance/FinanceDataGrid';
import MacroNews from '@/apps/finance/MacroNews';
import { BuildAventureDescription } from '@/apps/modal/BuildAventureDescription';
import InfoModal from '@/apps/modal/InfoModal';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FinanceNewsDescription } from '@/apps/modal/FinanceNewsDescription';

export interface IFinanceNewsPanelProps {}

const FinanceNewsPanel: React.FC<IFinanceNewsPanelProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Paper
      square
      elevation={1}
      sx={{ display: 'flex', rowGap: '2rem', minHeight: '100rem', flexDirection: 'column' }}
    >
      <InfoModal
        title='Welcome to Build-A-Venture!'
        content={<FinanceNewsDescription />}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
      <Button onClick={handleOpenModal} sx={{ minWidth: '300px' }} variant={'contained'}>
        <Typography variant={'h5'} color={'darkslategrey'}>
          About this App
        </Typography>
      </Button>
      <MacroNews />
      <FinanceDataGrid />
    </Paper>
  );
};

export default FinanceNewsPanel;
