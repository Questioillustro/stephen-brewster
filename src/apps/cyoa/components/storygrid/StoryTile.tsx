import { IStory } from '../../api/StoryService';
import React from 'react';
import { Paper, Typography } from '@mui/material';

export interface IStoryTileProps {
  story: IStory;
}

const StoryTile = (props: IStoryTileProps) => {
  const { story } = props;

  return (
    <Paper variant={'elevation'} elevation={1} key={story._id} sx={{ p: 2, maxWidth: '400px' }}>
      <Paper variant={'elevation'} elevation={5} color={'secondary'} sx={{ p: 2, mb: 2 }}>
        <Typography variant={'h5'} color={'secondary'}>
          {story.name}
        </Typography>
      </Paper>

      <Paper variant={'elevation'} elevation={5} sx={{ p: 2 }}>
        <img alt={story.name} src={story.imageUrl} width={'100%'} />
      </Paper>
    </Paper>
  );
};

export default StoryTile;
