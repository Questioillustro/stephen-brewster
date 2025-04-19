import { Skeleton, Stack } from '@mui/material';
import React from 'react';

const LoadingStory = () => {
  return (
    <Stack spacing={2} style={{ width: '100%' }} sx={{ p: 2 }}>
      <Skeleton variant="rectangular" width={'100%'} height={'10%'} />
      <Skeleton variant="rectangular" width={'100%'} height={'10%'} />

      <Skeleton variant="circular" width={'10%'} height={'10%'} />
      <Skeleton variant="circular" width={'10%'} height={'10%'} />

      <Skeleton variant="rounded" width={'100%'} height={'10%'} />
      <Skeleton variant="rounded" width={'100%'} height={'10%'} />

      <Skeleton variant="circular" width={'10%'} height={'10%'} />
      <Skeleton variant="circular" width={'10%'} height={'10%'} />

      <Skeleton variant="rounded" width={'100%'} height={'10%'} />
      <Skeleton variant="rounded" width={'100%'} height={'10%'} />
    </Stack>
  );
};

export default LoadingStory;
