import React from 'react';
import { MainViewProvider } from '@/apps/cyoa/context/MainViewContext';
import Landing from '@/apps/cyoa/layout/Landing';
import { StoryProvider } from '@/apps/cyoa/context/StoryContext';
import { SBThemeProvider } from '@/theme/SBThemeContext';

const BuildAVentureApp = () => {
  return (
    <SBThemeProvider theme={'bavdark'}>
      <MainViewProvider>
        <StoryProvider>
          <Landing />
        </StoryProvider>
      </MainViewProvider>
    </SBThemeProvider>
  );
};

export default BuildAVentureApp;
