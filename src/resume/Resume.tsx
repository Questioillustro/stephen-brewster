/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Masonry from '@mui/lab/Masonry';
import Skills from './skills/Skills';
import SBCard from '../components/card/SBCard';
import Experience from './experience/Experience';

function Resume() {
  return (
    <Masonry columns={1} spacing={2}>
      <SBCard title={'Skills'} content={<Skills />} />

      <SBCard title={'Experience'} content={<Experience />} />

      <SBCard title={'Education'} content={'RIT class of 2015, Magna Cum Laude.'} />

      <SBCard title={'Interests'} content={'I have interests in things'} />
    </Masonry>
  );
}

export default Resume;
