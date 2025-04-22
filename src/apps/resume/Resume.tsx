import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Education from './education/Education';
import Code from './code/Code';
import { SkillsProvider } from './skills/context/SkillsContext';
import ResumeCard from '@/components/card/resumecard/ResumeCard';
import SkillControlPanel from './skills/controlpanel/SkillControlPanel';
import React from 'react';
import { SBThemeProvider } from '@/theme/SBThemeContext';
import { Paper, Stack } from '@mui/material';

function Resume() {
  return (
    <SBThemeProvider theme={'resumeDark'}>
      <Paper elevation={0} sx={{ p: 2, display: 'flex', width: '100%' }}>
        <Stack sx={{ gap: 2, width: '100%' }}>
          <ResumeCard title={'Experience'} content={<Experience />} />

          <SkillsProvider>
            <ResumeCard
              title={'Skills'}
              content={<Skills />}
              controlPanel={<SkillControlPanel />}
            />
          </SkillsProvider>

          <ResumeCard title={'Education'} content={<Education />} />

          <ResumeCard title={'Code'} content={<Code />} />
        </Stack>
      </Paper>
    </SBThemeProvider>
  );
}

export default Resume;
