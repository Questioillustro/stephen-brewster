import { Stack } from '@mui/material';
import React, { useContext } from 'react';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';
import BuildingView from '@/apps/cyoa/layout/BuildingView';
import StoryPresenter from '@/apps/cyoa/components/storypresentation/StoryPresenter';
import AppHeader from '@/layout/apps/AppHeader';
import { AboutBuildAVenture } from '@/apps/cyoa/layout/AboutBuildAVenture';
import { BavLibrary } from '@/apps/cyoa/layout/BavLibrary';
import { ViewToggle } from '@/apps/cyoa/layout/ViewToggle';

const Landing = () => {
  const { state } = useContext(MainViewContext);

  return (
    <Stack sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
      <AppHeader content={<ViewToggle />} about={<AboutBuildAVenture />} />

      {state.currentView === 'building' && <BuildingView />}

      {state.currentView === 'reading' && (
        <StoryPresenter view={state.isRevisit ? 'existing' : 'new'} />
      )}
    </Stack>
  );
};

export default Landing;
