import React from 'react';
import { Paper } from '@mui/material';
import BackButton from '@/apps/cyoa/components/activestory/inputs/BackButton';
import StoryTile from '@/apps/cyoa/components/storygrid/StoryTile';
import { IStory } from '@/apps/cyoa/api/StoryService';
import BuildOptions from '@/apps/cyoa/components/activestory/inputs/BuildOptions';
import { ActiveStoryViews } from '@/apps/cyoa/components/activestory/ActiveStory';

export interface IBuildNewProps {
  story: IStory;
  setView: (view: ActiveStoryViews) => void;
  build: (prompts: string, characterPrompts: string) => void;
}

const BuildNew: React.FC<IBuildNewProps> = (props: IBuildNewProps) => {
  const { story, setView, build } = props;

  const goBack = () => {
    setView('typeselect');
  };

  const setPrompts = (prompts: string, characterPrompts: string) => {
    build(prompts, characterPrompts);
  };

  return (
    <Paper square sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <BackButton onclick={goBack} />

      <Paper square sx={{ display: 'flex' }}>
        <StoryTile story={story} />
        <BuildOptions setPrompts={setPrompts} />
      </Paper>
    </Paper>
  );
};

export default BuildNew;
