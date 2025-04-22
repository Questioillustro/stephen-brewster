import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

export interface ICarouselButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}

export const CarouselButton = (props: ICarouselButtonProps) => {
  return (
    <Button
      onClick={props.onClick}
      variant='contained'
      disabled={props.disabled}
      sx={{
        height: '100%',
        m: 1,
        minWidth: { xs: '25px', sm: '30px' },
        padding: { xs: '0 2px', sm: '0 4px' },
      }}
    >
      {props.direction === 'left' && (
        <ChevronLeft sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
      )}
      {props.direction === 'right' && (
        <ChevronRight sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
      )}
    </Button>
  );
};
