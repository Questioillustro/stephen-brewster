import React from 'react';
import Typography from '@mui/material/Typography';
import { List, ListItem } from '@mui/material';

export const BuildAventureDescription: React.FC = () => {
  return (
    <Typography variant={'body1'} color={'primary'}>
      Choose a story to build, choose attributes for the main character and the story themes and
      plot. An LLM will build a short story to your specifications. You can build images for each
      page of the story and end up with a completely unique story, built by you and our AI friends.
      <p>
        <Typography variant={'h5'} color={'secondary'}>
          Future Features
        </Typography>
      </p>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          As LLMs improve, the quality of the stories should naturally improve as well
        </ListItem>
        <ListItem>
          When available, video generation options will eventually be added to animate it
        </ListItem>
        <ListItem>
          UX is entirely rough draft, improvements will come as the app becomes stable
        </ListItem>
        <ListItem>Educational style adventure stories with topics to choose from</ListItem>
      </List>
    </Typography>
  );
};
