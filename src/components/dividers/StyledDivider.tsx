import React from 'react';
import { Divider, Stack } from '@mui/material';

const StyledDivider: React.FC = () => {
  return (
    <Stack
      sx={{
        margin: '10px 0',
        opacity: 1,
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Divider
        sx={{
          borderColor: 'rgb(69, 146, 221)', // Light gray for dark theme
          margin: '1px 0',
          opacity: 0.5,
          width: '80%',
        }}
      />
      <Divider
        sx={{
          borderColor: 'rgb(69, 146, 221)', // Light gray for dark theme
          margin: '1px 0',
          opacity: 0.5,
          width: '80%',
        }}
      />
    </Stack>
  );
};

export default StyledDivider;
