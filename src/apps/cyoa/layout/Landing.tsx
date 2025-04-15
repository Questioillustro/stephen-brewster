import { Paper } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';
import VentureButtons from '@/apps/cyoa/components/activestory/inputs/VentureButtons';
import BuildingView from '@/apps/cyoa/layout/BuildingView';
import { useStoryContext } from '@/apps/cyoa/context/StoryContext';
import useFetch from '@/apps/cyoa/hooks/useFetch';
import { getStories, IStory } from '@/apps/cyoa/api/StoryService';
import StoryPresenter from '@/apps/cyoa/components/activestory/storypresentation/StoryPresenter';

const Landing = () => {
  const { state } = useContext(MainViewContext);

  const { data: stories, loading, error } = useFetch<IStory[]>(getStories);

  const { setStories } = useStoryContext();

  useEffect(() => {
    if (stories) setStories(stories);
  }, [stories]);

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
