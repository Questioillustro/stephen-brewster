import React from 'react';
import { Box } from '@mui/material';
import QuoteCarousel from '@/apps/about/quotes/QuoteCarousel';
import WordleApp from '@/apps/wordle/WordleApp';

function About() {
  return (
    <div>
      <Box>
        <QuoteCarousel />
        <WordleApp />
      </Box>
    </div>
  );
}

export default About;
