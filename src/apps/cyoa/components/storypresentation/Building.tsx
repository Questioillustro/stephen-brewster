import { CardMedia } from '@mui/material';
import React from 'react';

export const Building = () => (
  <CardMedia
    component='img'
    sx={{
      width: '100%',
      objectFit: 'cover',
      animation: 'pulse 3s infinite ease-in-out', // Apply the pulse animation
      '@keyframes pulse': {
        '0%': { opacity: 1 },
        '50%': { opacity: 0.3 }, // Adjust opacity for the "fade" effect
        '100%': { opacity: 1 },
      },
    }}
    image={'/bav/building_a_venture_1.jpg'}
    title={'build-a-picture'}
    alt={'Building a picture...'}
  />
);
