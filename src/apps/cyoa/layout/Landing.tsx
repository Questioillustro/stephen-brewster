﻿import { Box, Paper } from '@mui/material';
import React, { useContext } from 'react';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';
import VentureButtons from '@/apps/cyoa/components/inputs/VentureButtons';
import BuildingView from '@/apps/cyoa/layout/BuildingView';
import StoryPresenter from '@/apps/cyoa/components/storypresentation/StoryPresenter';
import { AboutBuildAVenture } from '@/apps/cyoa/layout/AboutBuildAVenture';

const Landing = () => {
  const { state } = useContext(MainViewContext);

  return (
    <Paper
      variant={'outlined'}
      sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}
    >
      {state.currentView === 'landing' && <VentureButtons />}

      {state.currentView === 'building' && <BuildingView />}

      {state.currentView === 'reading' && (
        <StoryPresenter view={state.isRevisit ? 'existing' : 'new'} />
      )}
    </Paper>
  );
};

export default Landing;
