import { CardMedia } from '@mui/material';
import React from 'react';

export interface IStoryArtTileProps {
  url: string;
}

export const StoryArtTile = (props: IStoryArtTileProps) => (
  <CardMedia
    component='img'
    sx={{
      width: '100%',
      objectFit: 'cover',
    }}
    image={props.url}
    title={'build-a-picture'}
    alt={'Building a picture...'}
  />
);
