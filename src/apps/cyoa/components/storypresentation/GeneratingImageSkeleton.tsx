import { Skeleton, Stack, Typography } from '@mui/material';
import React from 'react';

const GeneratingImageSkeleton = () => {
  return (
    <Stack
      spacing={1}
      style={{ width: '100%', textAlign: 'center' }}
      sx={{ p: 1 }}
    >
      <Skeleton variant="rectangular" width={'100%'} height={'25%'} />
      <Skeleton variant="rectangular" width={'100%'} height={'25%'} />

      <Typography variant={'body2'} color={'primary'}>
        Building a picture...
      </Typography>

      <Skeleton variant="rectangular" width={'100%'} height={'25%'} />
      <Skeleton variant="rectangular" width={'100%'} height={'25%'} />
    </Stack>
  );
};

export default GeneratingImageSkeleton;
