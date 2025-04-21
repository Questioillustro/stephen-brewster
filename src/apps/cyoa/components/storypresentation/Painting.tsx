import { CardMedia } from '@mui/material';
import React from 'react';

export const Painting = () => (
  <CardMedia
    component='img'
    sx={{
      width: '100%',
      objectFit: 'cover',
    }}
    image={'/bav/painting.jpg'}
    title={'build-a-picture'}
    alt={'Building a picture...'}
  />
);
