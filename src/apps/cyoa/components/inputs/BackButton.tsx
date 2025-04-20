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
      color={'primary'}
      startIcon={<ArrowBackIosIcon color={'secondary'} />}
      onClick={() => onclick()}
      sx={{ m: 2, width: '200px' }}
    >
      <Typography variant={'h6'} color={'secondary'}>
        Back
      </Typography>
    </Button>
  );
};

export default BackButton;
