/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Paper, ThemeProvider } from '@mui/material';
import { LayoutStyle } from './Layout.style';
import Resume from '@/apps/resume/Resume';
import { ThemeContext } from '@/contexts/ThemeContext';
import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '@/apps/about/About';
import NavigationGrid from '@/components/navigation/NavigationGrid';
import { PythonScripts } from '@/apps/pythonscripts/PythonScripts';
import { AppsPage } from '@/apps/appspage/AppsPage';
import { WritingPage } from '@/apps/writing/WritingPage';
import CyaMain from '@/apps/cyoa/components/CyaMain';

function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <div css={LayoutStyle.root}>
        <Paper square>
          <NavigationGrid compact />
        </Paper>

        <Paper elevation={10} css={LayoutStyle.contentWrapper} square>
          <div css={LayoutStyle.content}>
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/apps' element={<AppsPage />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/writing' element={<WritingPage />} />
              <Route path='/pictures' element={<div>pictures</div>} />
            </Routes>
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default Layout;
