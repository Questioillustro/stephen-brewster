import { CardMedia } from '@mui/material';
import React from 'react';

export const Building = () => (
  <CardMedia
    component='img'
    sx={{
      width: '100%',
      objectFit: 'cover',
    }}
    image={'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/building_a_venture_1.jpg'}
    title={'build-a-picture'}
    alt={'Building a picture...'}
  />
);
