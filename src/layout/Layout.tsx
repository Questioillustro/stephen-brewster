import { Paper, Stack } from '@mui/material';
import Resume from '@/apps/resume/Resume';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '@/apps/about/About';
import NavigationGrid from '@/components/navigation/NavigationGrid';
import { AppsPage } from '@/layout/apps/AppsPage';
import { WritingPage } from '@/apps/writing/WritingPage';
import BuildAVentureApp from '@/apps/cyoa/BuildAVentureApp';
import CodeAssistant from '@/apps/codeassistant/CodeAssistant';
import WordleApp from '@/apps/wordle/WordleApp';
import NavBar from '@/components/navigation/NavBar';

function Layout() {
  return (
    <Stack sx={{ display: 'flex', height: '100vh', width: '100%' }}>
      <Paper square>
        <NavBar />
      </Paper>

      <Paper
        square
        elevation={0}
        sx={{
          flexGrow: 1,
          display: 'flex',
          overflowX: 'hidden',
          justifyContent: 'center',
        }}
      >
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/apps' element={<AppsPage />} />
          <Route path='/apps/bav' element={<BuildAVentureApp />} />
          <Route path='/apps/codeassistant' element={<CodeAssistant />} />
          <Route path='/apps/wordle' element={<WordleApp />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/writing' element={<WritingPage />} />
        </Routes>
      </Paper>
    </Stack>
  );
}

export default Layout;
