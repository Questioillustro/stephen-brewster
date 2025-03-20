import ResumeCard from '@/components/card/resumecard/ResumeCard';
import Sliding from '@/components/animation/sliding/Sliding';
import React from 'react';
import Interests from '@/apps/about/Interests';
import { Box } from '@mui/material';
import QuoteCarousel from '@/apps/about/quotes/QuoteCarousel';

function About() {
  return (
    <div>
      <Box>
        <QuoteCarousel />
      </Box>
      <Sliding
        direction={'left'}
        child={<ResumeCard title={'Interests'} content={<Interests />} />}
      />
    </div>
  );
}

export default About;
