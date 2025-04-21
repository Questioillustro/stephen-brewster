import React from 'react';
import Typography from '@mui/material/Typography';
import { List, ListItem } from '@mui/material';

export const NotWordleDescription: React.FC = () => {
  return (
    <Typography variant={'body1'} color={'primary'}>
      Definitely just Wordle. It even has stats tracking!
      <p>
        <Typography variant={'h5'} color={'secondary'}>
          Future Features
        </Typography>
      </p>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>Stats tracking</ListItem>
      </List>
    </Typography>
  );
};
