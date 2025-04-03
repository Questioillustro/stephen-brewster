import React from 'react';
import Typography from '@mui/material/Typography';
import { List, ListItem } from '@mui/material';

export const FinanceNewsDescription: React.FC = () => {
  return (
    <Typography variant={'body1'} color={'primary'}>
      Queries Grok (the only real-time data LLM at the moment) for macro news and data release
      schedules related to markets and display it along with sentiment estimations and descriptions.
      <p>
        <Typography variant={'h5'} color={'secondary'}>
          Future Features
        </Typography>
      </p>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          As LLMs improve, the quality of the quality will improve. Currently only Grok 2 is
          available via api and does not retrieve accurate information. Grok 3 should be
          significantly better once available.
        </ListItem>
        <ListItem>Add micro news - company specific data and news</ListItem>
        <ListItem>Real-time analysis of macro and micro sentiment</ListItem>
      </List>
    </Typography>
  );
};
