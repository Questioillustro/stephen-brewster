import ResumeCard from '@/components/card/resumecard/ResumeCard';
import Sliding from '@/components/animation/sliding/Sliding';
import React from 'react';
import Interests from '@/apps/about/Interests';

function About() {
  return (
    <div>
      <Sliding
        direction={'left'}
        child={<ResumeCard title={'Interests'} content={<Interests />} />}
      />
    </div>
  );
}

export default About;
