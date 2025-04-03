import { AnimationConstants } from '@/apps/cyoa/constants/AnimationConstants';
import Header from '@/apps/cyoa/layout/Header';
import { Fade, List, ListItem, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import StoryGrid from '@/apps/cyoa/components/storygrid/StoryGrid';
import React, { useState } from 'react';
import { IStory } from '@/apps/cyoa/api/StoryService';
import InfoModal from '@/apps/cyoa/components/modal/InfoModal';
import Button from '@mui/material/Button';
import { BuildAventureDescription } from '@/apps/cyoa/components/modal/BuildAventureDescription';

export interface IMainGridProps {
  stories: IStory[] | null;
  setStory: (number) => void;
}

const MainGrid: React.FC<IMainGridProps> = (props: IMainGridProps) => {
  const { stories, setStory } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Fade in={true} timeout={AnimationConstants.MENU_TRANSITION_SPEED}>
      <div>
        <InfoModal
          title='Welcome to Build-A-Venture!'
          content={<BuildAventureDescription />}
          open={isModalOpen}
          onClose={handleCloseModal}
        />
        <Header />
        <Paper
          square
          sx={{ p: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center' }}
        >
          <Button onClick={handleOpenModal} sx={{ minWidth: '300px' }} variant={'contained'}>
            <Typography variant={'h5'} color={'darkslategrey'}>
              About this App
            </Typography>
          </Button>
        </Paper>

        <StoryGrid stories={stories} setStoryIndex={setStory} />
      </div>
    </Fade>
  );
};

export default MainGrid;
