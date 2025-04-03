import { AnimationConstants } from '@/apps/cyoa/constants/AnimationConstants';
import Header from '@/apps/cyoa/layout/Header';
import { Box, Fade, List, ListItem, Paper } from '@mui/material';
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
        <Box sx={{ p: 2 }}>
          <Button onClick={handleOpenModal} sx={{ width: '100%' }} variant={'contained'}>
            <Typography variant={'h5'} color={'darkslategrey'}>
              About this App
            </Typography>
          </Button>
          <InfoModal
            title='Welcome to Build-A-Venture!'
            content={<BuildAventureDescription />}
            open={isModalOpen}
            onClose={handleCloseModal}
          />
        </Box>

        <Header />

        <StoryGrid stories={stories} setStoryIndex={setStory} />
      </div>
    </Fade>
  );
};

export default MainGrid;
