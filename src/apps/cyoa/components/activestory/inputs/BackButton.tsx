import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Typography } from '@mui/material';
import React from 'react';

export interface IBackButtonProps {
  onclick: () => void;
}

const BackButton: React.FC<IBackButtonProps> = (props: IBackButtonProps) => {
  const { onclick } = props;
  return (
    <Button
      variant={'contained'}
      color={'secondary'}
      startIcon={<ArrowBackIosIcon color={'primary'} />}
      onClick={() => onclick()}
      sx={{ p: 2 }}
    >
      <Typography variant={'h4'} color={'primary'}>
        Back
      </Typography>
    </Button>
  );
};

export default BackButton;
