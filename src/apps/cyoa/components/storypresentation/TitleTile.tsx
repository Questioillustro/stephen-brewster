import { Typography } from '@mui/material';
import React from 'react';

export interface ITitleTileProps {
  title: string;
}

export const TitleTile = (props: ITitleTileProps) => (
  <Typography
    color={'primary'}
    sx={{
      p: 2,
      typography: { xs: 'body1', sm: 'h6', md: 'h4' },
    }}
  >
    {props.title}
  </Typography>
);
