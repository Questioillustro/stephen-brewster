import { AnimationConstants } from '@/apps/cyoa/constants/AnimationConstants';
import Header from '@/apps/cyoa/layout/Header';
import { Fade, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import StoryGrid from '@/apps/cyoa/components/storygrid/StoryGrid';
import React from 'react';
import { IStory } from '@/apps/cyoa/api/StoryService';

export interface IMainGridProps {
  stories: IStory[] | null;
  setStory: (number) => void;
}

const MainGrid: React.FC<IMainGridProps> = (props: IMainGridProps) => {
  const { stories, setStory } = props;

  return (
    <Fade in={true} timeout={AnimationConstants.MENU_TRANSITION_SPEED}>
      <div>
        <Header />
        <Paper square sx={{ p: 1 }}>
          <Typography variant={'h5'} sx={{ width: '100%', textAlign: 'center' }}>
            Build a customized story with AI!
          </Typography>
        </Paper>

        <StoryGrid stories={stories} setStoryIndex={setStory} />
      </div>
    </Fade>
  );
};

export default MainGrid;
