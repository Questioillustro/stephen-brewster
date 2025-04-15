import React, { useState } from 'react';
import { Button, Paper, Typography } from '@mui/material';
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
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', rowGap: '20px', width: '100%' }}>
      <MainCharacterPanel setMainCharacterPrompts={setMainCharacter} />

      <StoryDetailsPanel setStoryDetailsPrompt={setStoryDetails} />

      <Button onClick={() => buildAdventure()} variant={'contained'}>
        Generate Story
      </Button>
    </Paper>
  );
};

export default BuildOptions;
