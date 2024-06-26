﻿/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Masonry from '@mui/lab/Masonry';
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Education from './education/Education';
import Interests from './interests/Interests';
import Code from './code/Code';
import Sliding from '../components/animation/sliding/Sliding';
import { SkillsProvider } from './skills/context/SkillsContext';
import ResumeCard from '../components/card/resumecard/ResumeCard';
import SkillControlPanel from './skills/controlpanel/SkillControlPanel';

function Resume() {
  return (
    <Masonry columns={1} spacing={2}>
      {/*<SBCard title={'About Me'} content={<Summary />} />*/}

      <Sliding
        direction={'left'}
        child={<ResumeCard title={'Experience'} content={<Experience />} />}
      />

      <SkillsProvider>
        <Sliding
          direction={'right'}
          child={
            <ResumeCard
              title={'Skills'}
              content={<Skills />}
              controlPanel={<SkillControlPanel />}
            />
          }
        />
      </SkillsProvider>

      <Sliding
        direction={'left'}
        child={<ResumeCard title={'Education'} content={<Education />} />}
      />

      <Sliding direction={'right'} child={<ResumeCard title={'Code'} content={<Code />} />} />

      <Sliding
        direction={'left'}
        child={<ResumeCard title={'Interests'} content={<Interests />} />}
      />
    </Masonry>
  );
}

export default Resume;
