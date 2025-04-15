import { IStory } from '../../api/StoryService';
import React from 'react';
import { Paper, Typography } from '@mui/material';

export interface IStoryTileProps {
  story: IStory;
  selected: boolean;
}

const StoryTile = (props: IStoryTileProps) => {
  const { story, selected } = props;

  return (
    <Paper
      variant={'elevation'}
      elevation={5}
      sx={{
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: selected ? '2px solid white' : 'none',
      }}
    >
      <Typography variant={'body2'} color={'secondary'}>
        {story.name}
      </Typography>
      <img alt={story.name} src={story.imageUrl} width={'100%'} />
    </Paper>
  );
};

export default StoryTile;
