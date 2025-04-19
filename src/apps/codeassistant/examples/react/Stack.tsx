import React from 'react';
import { Stack, Button, Typography } from '@mui/material';

const StackExample = () => {
  return (
    <div>
      <Typography variant='h6' gutterBottom>
        Stack Component Example
      </Typography>

      {/* Horizontal Stack */}
      <Stack
        direction='row' // Arrange items horizontally
        spacing={2} // Space between items (2 * 8px = 16px)
        sx={{ marginBottom: 4 }}
      >
        <Button variant='contained'>Button 1</Button>
        <Button variant='outlined'>Button 2</Button>
        <Button variant='text'>Button 3</Button>
      </Stack>

      {/* Vertical Stack */}
      <Stack
        direction='column' // Arrange items vertically
        spacing={3} // Space between items (3 * 8px = 24px)
        alignItems='center' // Center items horizontally
      >
        <Button variant='contained' color='primary'>
          Primary Button
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary Button
        </Button>
        <Button variant='contained' disabled>
          Disabled Button
        </Button>
      </Stack>
    </div>
  );
};

export default StackExample;
