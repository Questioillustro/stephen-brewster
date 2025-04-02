import React, { useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import ThemeSelect from '@/apps/cyoa/components/activestory/inputs/ThemeSelect';
import QuoteSelect from '@/apps/cyoa/components/activestory/inputs/QuoteSelect';
import MainCharacterPanel from '@/apps/cyoa/components/activestory/inputs/MainCharacterPanel';
import StoryDetailsPanel from '@/apps/cyoa/components/activestory/inputs/StoryDetailsPanel';

export interface IBuildOptionsProps {
  setPrompts: (prompts: string, characterPrompts: string) => void;
}

const BuildOptions: React.FC<IBuildOptionsProps> = (props: IBuildOptionsProps) => {
  const { setPrompts } = props;

  const [mainCharacter, setMainCharacter] = useState<string>('');

  const [storyDetails, setStoryDetails] = useState<string>('');

  const buildAdventure = () => {
    setPrompts(storyDetails, mainCharacter);
  };

  return (
    <Paper
      variant={'outlined'}
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        rowGap: '20px',
      }}
      sx={{ p: 2 }}
    >
      <Typography variant={'h6'} color={'primary'}>
        Build-A-Venture
      </Typography>

      <MainCharacterPanel setMainCharacterPrompts={setMainCharacter} />

      <StoryDetailsPanel setStoryDetailsPrompt={setStoryDetails} />

      <Button onClick={() => buildAdventure()} variant={'contained'}>
        Generate Story
      </Button>
    </Paper>
  );
};

export default BuildOptions;
