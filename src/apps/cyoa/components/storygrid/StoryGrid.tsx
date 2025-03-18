import React from 'react';
import { IStory } from '../../api/StoryService';
import StoryTile from './StoryTile';
import { Grid } from '@mui/material';

export interface StoryGridProps {
  stories: IStory[] | null;
  setStoryIndex: (idx: number | null) => void;
}

const StoryGrid = (props: StoryGridProps) => {
  const { stories, setStoryIndex } = props;

  return (
    <Grid
      container
      spacing={2}
      style={{ width: '100%', justifyContent: 'space-evenly' }}
      sx={{ p: 2 }}
    >
      {stories?.map((s, idx) => (
        <Grid item key={s._id}>
          <div onClick={() => setStoryIndex(idx)} style={{ cursor: 'pointer' }}>
            <StoryTile key={s._id} story={s} />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default StoryGrid;
