﻿import React, { useContext, useState } from 'react';
import { Paper } from '@mui/material';
import BackButton from '@/apps/cyoa/components/activestory/inputs/BackButton';
import BuildOptions from '@/apps/cyoa/components/activestory/inputs/BuildOptions';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';
import { generateNewAdventure, IAdventure } from '@/apps/cyoa/api/AdventureService';
import StoryCarousel from '@/apps/cyoa/components/storygrid/StoryCarousel';
import { useStoryContext } from '@/apps/cyoa/context/StoryContext';
import LoadingSkeleton from '@/components/loading/LoadingSkeleton';

const BuildingView: React.FC = () => {
  const { state, dispatch } = useContext(MainViewContext);

  const { selectedStory, setAdventure } = useStoryContext();

  const [isLoading, setIsLoading] = useState(false);

  const goBack = () => {
    dispatch('LANDING');
  };

  const build = async (prompts: string, characterPrompts: string) => {
    if (!selectedStory) return;

    setIsLoading(true);

    generateNewAdventure(selectedStory._id, prompts, characterPrompts, 'grok', 0.8).then(
      (adventure: IAdventure) => {
        setIsLoading(false);
        dispatch('VIEW_NEW');
        setAdventure(adventure);
      },
    );
  };

  const setPrompts = (prompts: string, characterPrompts: string) => {
    build(prompts, characterPrompts);
  };

  if (isLoading) {
    return (
      <Paper variant={'elevation'} sx={{ display: 'flex', width: '100%', height: '15rem' }}>
        <LoadingSkeleton />
      </Paper>
    );
  } else {
    return (
      <Paper square sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <BackButton onclick={goBack} />

        <StoryCarousel />

        <Paper square sx={{ display: 'flex', width: '100%' }}>
          <BuildOptions setPrompts={setPrompts} />
        </Paper>
      </Paper>
    );
  }
};

export default BuildingView;
