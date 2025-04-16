import { Paper } from '@mui/material';
import React, { useContext } from 'react';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';
import VentureButtons from '@/apps/cyoa/components/activestory/inputs/VentureButtons';
import BuildingView from '@/apps/cyoa/layout/BuildingView';
import StoryPresenter from '@/apps/cyoa/components/activestory/storypresentation/StoryPresenter';

const Landing = () => {
  const { state } = useContext(MainViewContext);

  return (
    <Paper variant={'outlined'} sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
      {state.currentView === 'landing' && <VentureButtons />}

      {state.currentView === 'building' && <BuildingView />}

      {state.currentView === 'reading' && (
        <StoryPresenter view={state.isRevisit ? 'existing' : 'new'} />
      )}
    </Paper>
  );
};

export default Landing;
