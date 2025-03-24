import { Box, Fade, Paper } from '@mui/material';
import React from 'react';
import StoryTile from '@/apps/cyoa/components/storygrid/StoryTile';
import VentureButtons from '@/apps/cyoa/components/activestory/inputs/VentureButtons';
import { IStory } from '@/apps/cyoa/api/StoryService';
import BackButton from '@/apps/cyoa/components/activestory/inputs/BackButton';
import { CyaViews } from '@/apps/cyoa/CyaMain';
import { AnimationConstants } from '@/apps/cyoa/constants/AnimationConstants';
import { ActiveStoryViews } from '@/apps/cyoa/components/activestory/ActiveStory';

export interface ActiveStoryProps {
  story: IStory;
  goBack: () => void;
  setActiveView: (view: ActiveStoryViews) => void;
}

const TypeSelection = (props: ActiveStoryProps) => {
  const { story, goBack, setActiveView } = props;

  return (
    <Fade in={true} timeout={AnimationConstants.MENU_TRANSITION_SPEED}>
      <Paper variant={'elevation'} sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
        <BackButton onclick={goBack} />
        <Box sx={{ flexDirection: 'row', display: 'flex' }}>
          <StoryTile story={story} />
          <VentureButtons setActiveView={setActiveView} />
        </Box>
      </Paper>
    </Fade>
  );
};

export default TypeSelection;
