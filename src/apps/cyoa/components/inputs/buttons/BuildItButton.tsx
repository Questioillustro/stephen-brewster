import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import React from 'react';

export interface IBuildItButtonProps {
  onClick: () => void;
}

export const BuildItButton = (props: IBuildItButtonProps) => (
  <Button onClick={() => props.onClick()} variant={'contained'} sx={{ width: '50%', p: 3 }}>
    <Typography variant={'h6'} color={'black'}>
      Build It!
    </Typography>
  </Button>
);
