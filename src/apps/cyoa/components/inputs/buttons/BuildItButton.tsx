import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import React from 'react';

export interface IBuildItButtonProps {
  onClick: () => void;
}

export const BuildItButton = (props: IBuildItButtonProps) => (
  <Button
    onClick={() => props.onClick()}
    variant={'contained'}
    sx={{ width: '50%', p: 3, mt: 3, mb: 2 }}
  >
    <Typography variant={'h6'} color={'black'}>
      Build It!
    </Typography>
  </Button>
);
