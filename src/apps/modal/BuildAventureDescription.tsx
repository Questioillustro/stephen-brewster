import React from 'react';
import Typography from '@mui/material/Typography';
import { List, ListItem } from '@mui/material';

export const BuildAventureDescription: React.FC = () => {
  return (
    <Typography variant={'body1'} color={'primary'}>
      Builds a custom short story using AI. Customize the main character, theme, genre and plot. An
      LLM will build a short story to your specifications, including pictures for each page.
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
