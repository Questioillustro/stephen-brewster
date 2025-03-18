import StoryGrid from './storygrid/StoryGrid';
import useFetch from '../hooks/useFetch';
import { getStories, IStory } from '../api/StoryService';
import React, { useState } from 'react';
import { Fade, Paper } from '@mui/material';
import ActiveStory from './activestory/ActiveStory';
import { AnimationConstants } from '../constants/AnimationConstants';
import Typography from '@mui/material/Typography';

const CyaMain = () => {
  const { data: stories, loading, error } = useFetch<IStory[]>(getStories);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [gridHidden, setGridHidden] = useState(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const setStory = (idx: number | null) => {
    setSelectedIndex(idx);
    if (idx === null) setGridHidden(false);
  };

  return (
    <Paper variant={'outlined'} sx={{ p: 2 }}>
      {!gridHidden && (
        <Fade
          in={selectedIndex === null}
          onExited={() => setGridHidden(true)}
          timeout={AnimationConstants.MENU_TRANSITION_SPEED}
        >
          <div>
            <Paper square sx={{ p: 1 }}>
              <Typography variant={'h5'} sx={{ width: '100%', textAlign: 'center' }}>
                Choose a story format, themes, character names, and let AI create a custom story
                just for you!
              </Typography>
            </Paper>

            <StoryGrid stories={stories} setStoryIndex={setStory} />
          </div>
        </Fade>
      )}
      {selectedIndex !== null && (
        <Fade in={gridHidden} timeout={AnimationConstants.MENU_TRANSITION_SPEED}>
          <div>
            <ActiveStory story={stories![selectedIndex!]} setStoryIndex={setStory} />
          </div>
        </Fade>
      )}
    </Paper>
  );
};

export default CyaMain;
