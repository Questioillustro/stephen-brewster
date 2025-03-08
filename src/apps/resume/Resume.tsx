import Masonry from '@mui/lab/Masonry';
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Education from './education/Education';
import Code from './code/Code';
import Sliding from '@/components/animation/sliding/Sliding';
import { SkillsProvider } from './skills/context/SkillsContext';
import ResumeCard from '@/components/card/resumecard/ResumeCard';
import SkillControlPanel from './skills/controlpanel/SkillControlPanel';
import SBLink from '@/components/link/SBLink';
import SBPopoverTextField from '@/components/popover/textfield/SBPopoverTextField';
import React from 'react';
import ResumeLink from './resumelink/ResumeLink';

function Resume() {
  return (
    <Masonry columns={1} spacing={2}>
      <div>
        <SBLink
          ariaLabel={'Download resume'}
          href={'/StephenBrewster_Resume.pdf'}
          linkContent={<ResumeLink />}
          popoverContent={<SBPopoverTextField text={'Download Resume (pdf)'} />}
        />
      </div>

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
    </Masonry>
  );
}

export default Resume;
