import StoryGrid from './components/storygrid/StoryGrid';
import useFetch from './hooks/useFetch';
import { getStories, IStory } from './api/StoryService';
import React, { useState } from 'react';
import { Box, Fade, Paper } from '@mui/material';
import ActiveStory from './components/activestory/ActiveStory';
import { AnimationConstants } from './constants/AnimationConstants';
import Typography from '@mui/material/Typography';
import Header from '@/apps/cyoa/layout/Header';
import TypeSelection from '@/apps/cyoa/layout/TypeSelection';
import MainGrid from '@/apps/cyoa/layout/MainGrid';
import BuildOptions from '@/apps/cyoa/components/activestory/inputs/BuildOptions';

export type CyaViews = 'maingrid' | 'activestory';

const CyaMain = () => {
  const { data: stories, loading, error } = useFetch<IStory[]>(getStories);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const [view, setView] = useState<CyaViews>('maingrid');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const setStory = (idx: number) => {
    setSelectedIndex(idx);
    setView('activestory');
  };

  return (
    <Paper variant={'outlined'} sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
      {view === 'maingrid' && <MainGrid stories={stories} setStory={setStory} />}

      {view === 'activestory' && <ActiveStory story={stories![selectedIndex]} setView={setView} />}
    </Paper>
  );
};

export default CyaMain;
