import React from 'react';
import { MainViewProvider } from '@/apps/cyoa/context/MainViewContext';
import Landing from '@/apps/cyoa/layout/Landing';
import { StoryProvider } from '@/apps/cyoa/context/StoryContext';

const BuildAVentureApp = () => {
  return (
    <MainViewProvider>
      <StoryProvider>
        <Landing />
      </StoryProvider>
    </MainViewProvider>
  );
};

export default BuildAVentureApp;
