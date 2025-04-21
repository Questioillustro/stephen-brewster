import { Typography } from '@mui/material';
import React from 'react';

export interface ITitleTileProps {
  title: string;
}

export const TitleTile = (props: ITitleTileProps) => (
  <Typography variant={'h4'} color={'primary'}>
    {props.title}
  </Typography>
);
