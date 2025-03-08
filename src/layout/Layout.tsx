/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from './header/Header';
import { Paper, ThemeProvider } from '@mui/material';
import { LayoutStyle } from './Layout.style';
import Resume from '@/apps/resume/Resume';
import Growing from '@/components/animation/growing/Growing';
import { ThemeContext } from '@/contexts/ThemeContext';
import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '@/apps/about/About';
import NavigationGrid from '@/components/navigation/NavigationGrid';

function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <div css={LayoutStyle.root}>
        <Paper
          elevation={0}
          css={LayoutStyle.header}
          sx={{ backgroundColor: 'cardContrastBg' }}
          square
        >
          <Growing child={<Header />} />
        </Paper>

        <Paper square>
          <NavigationGrid compact />
        </Paper>

        <Paper elevation={10} css={LayoutStyle.contentWrapper} square>
          <div css={LayoutStyle.content}>
            <Routes>
              <Route path='/' element={<div>Home</div>} />
              <Route path='/apps' element={<div>Apps</div>} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/about' element={<About />} />
              <Route path='/blog' element={<div>blog</div>} />
              <Route path='/pictures' element={<div>pictures</div>} />
            </Routes>
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default Layout;
