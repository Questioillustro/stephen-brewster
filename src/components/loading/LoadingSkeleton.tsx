import { Box, Paper, Skeleton, Stack } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';

const LoadingSkeleton = () => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        rowGap: '1rem',
      }}
    >
      <Skeleton variant='rectangular' width={'100%'} height={'25%'} />

      <Skeleton variant='rectangular' width={'100%'} height={'25%'} />

      <Skeleton variant='rectangular' width={'100%'} height={'25%'} />

      <Skeleton variant='rectangular' width={'100%'} height={'25%'} />
    </Paper>
  );
};

export default LoadingSkeleton;
