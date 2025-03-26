import { Box, Paper, Skeleton, Stack } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';

const LoadingSkeleton = () => {
  return (
    <Stack
      spacing={2}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '150rem',
        textAlign: 'center',
      }}
    >
      <Skeleton variant='rectangular' width={'100%'} height={'3%'} />

      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant={'body1'} color={'primary'}>
          Loading...
        </Typography>
      </Box>

      <Skeleton variant='rectangular' width={'100%'} height={'3%'} />
    </Stack>
  );
};

export default LoadingSkeleton;
