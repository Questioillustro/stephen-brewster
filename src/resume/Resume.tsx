/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Masonry from '@mui/lab/Masonry';
import Skills from './skills/Skills';
import SBCard from '../components/card/SBCard';
import Experience from './experience/Experience';
import Education from './education/Education';
import Interests from './interests/Interests';
import Code from './code/Code';
import Sliding from '../components/animation/sliding/Sliding';

function Resume() {
  return (
    <Masonry columns={1} spacing={2}>
      {/*<SBCard title={'About Me'} content={<Summary />} />*/}

      <Sliding
        direction={'left'}
        child={<SBCard title={'Experience'} content={<Experience />} />}
      />

      <Sliding direction={'right'} child={<SBCard title={'Skills'} content={<Skills />} />} />

      <Sliding direction={'left'} child={<SBCard title={'Education'} content={<Education />} />} />

      <Sliding direction={'right'} child={<SBCard title={'Code'} content={<Code />} />} />

      <Sliding direction={'left'} child={<SBCard title={'Interests'} content={<Interests />} />} />
    </Masonry>
  );
}

export default Resume;
