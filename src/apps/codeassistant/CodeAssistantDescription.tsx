import React from 'react';
import Typography from '@mui/material/Typography';
import { List, ListItem } from '@mui/material';

export const CodeAssistantDescription: React.FC = () => {
  return (
    <Typography variant={'body1'} color={'primary'}>
      Code writing assistant. UX components allow for more rapid prompt generation.
      <p>
        <Typography variant={'h5'} color={'secondary'}>
          Future Features
        </Typography>
      </p>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          Save code by prompt and keywords for reference and to avoid excess AI labor
        </ListItem>
        <ListItem>
          Change between LLM api options and multi-llm searches to compare results
        </ListItem>
        <ListItem>Provide multiple files as examples to use in generation</ListItem>
      </List>
    </Typography>
  );
};
