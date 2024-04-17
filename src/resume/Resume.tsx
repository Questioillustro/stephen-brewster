/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Masonry from '@mui/lab/Masonry';
import Skills from './skills/Skills';
import SBCard from '../components/card/SBCard';
import Experience from './experience/Experience';
import Education from './education/Education';
import Interests from './interests/Interests';
import Summary from './summary/Summary';

function Resume() {
  return (
    <Masonry columns={1} spacing={2}>
      {/*<SBCard title={'About Me'} content={<Summary />} />*/}

      <SBCard title={'Experience'} content={<Experience />} />

      <SBCard title={'Skills'} content={<Skills />} />

      <SBCard title={'Education'} content={<Education />} />

      <SBCard title={'Interests'} content={<Interests />} />
    </Masonry>
  );
}

export default Resume;
