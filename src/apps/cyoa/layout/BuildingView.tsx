import React, { useContext, useState } from 'react';
import { Box, Paper, Stack } from '@mui/material';
import BuildOptions from '@/apps/cyoa/components/inputs/BuildOptions';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';
import { BuildAVenture, IAdventureWrapper } from '@/apps/cyoa/api/AdventureService';
import { useStoryContext } from '@/apps/cyoa/context/StoryContext';
import LoadingSkeleton from '@/components/loading/LoadingSkeleton';
import { AboutBuildAVenture } from '@/apps/cyoa/layout/AboutBuildAVenture';

const BuildingView: React.FC = () => {
  const { state, dispatch } = useContext(MainViewContext);

  const { setAdventure } = useStoryContext();

  const [isLoading, setIsLoading] = useState(false);

  const goBack = () => {
    dispatch('LANDING');
  };

  const build = async (prompts: string, characterPrompts: string, artStyle: string) => {
    setIsLoading(true);

    BuildAVenture(prompts, characterPrompts, artStyle, 'grok', 0.9).then(
      (adventure: IAdventureWrapper) => {
        setAdventure(adventure);
        dispatch('VIEW_NEW');
        setIsLoading(false);
      },
    );
  };

  const setPrompts = (prompts: string, characterPrompts: string, artStyle: string) => {
    build(prompts, characterPrompts, artStyle);
  };

  if (isLoading) {
    return (
      <Paper variant={'elevation'} sx={{ display: 'flex', width: '100%', height: '15rem' }}>
        <LoadingSkeleton />
      </Paper>
    );
  } else {
    return <BuildOptions setPrompts={setPrompts} />;
  }
};

export default BuildingView;
