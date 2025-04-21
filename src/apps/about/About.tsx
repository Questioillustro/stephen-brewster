import React from 'react';
import { Stack } from '@mui/material';
import QuoteCarousel from '@/apps/about/quotes/QuoteCarousel';

function About() {
  return (
    <Stack sx={{ width: '100%' }}>
      <QuoteCarousel />
    </Stack>
  );
}

export default About;
