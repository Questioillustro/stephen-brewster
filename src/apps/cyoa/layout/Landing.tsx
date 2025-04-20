import { Stack } from '@mui/material';
import React, { useContext } from 'react';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';
import BuildingView from '@/apps/cyoa/layout/BuildingView';
import StoryPresenter from '@/apps/cyoa/components/storypresentation/StoryPresenter';
import AppHeader from '@/layout/apps/AppHeader';
import { AboutBuildAVenture } from '@/apps/cyoa/layout/AboutBuildAVenture';

const Landing = () => {
  const { state } = useContext(MainViewContext);

  return (
    <Stack
      sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', gap: 2 }}
    >
      <AppHeader about={<AboutBuildAVenture />} />

      {state.currentView === 'building' && <BuildingView />}

      {state.currentView === 'reading' && (
        <StoryPresenter view={state.isRevisit ? 'existing' : 'new'} />
      )}
    </Stack>
  );
};

export default Landing;
