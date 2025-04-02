import { Paper } from '@mui/material';
import MainCharacterName from '@/apps/cyoa/components/activestory/inputs/MainCharacterName';
import Typography from '@mui/material/Typography';
import GenderSelect from '@/apps/cyoa/components/activestory/inputs/GenderSelect';
import React, { useEffect, useState } from 'react';
import SkinColorSelect from '@/apps/cyoa/components/activestory/inputs/SkinColorSelect';
import HairColorSelect from '@/apps/cyoa/components/activestory/inputs/HairColorSelect';
import ThemeSelect from '@/apps/cyoa/components/activestory/inputs/ThemeSelect';
import QuoteSelect from '@/apps/cyoa/components/activestory/inputs/QuoteSelect';

export interface StoryDetailsPanelProps {
  setStoryDetailsPrompt: (name: string) => void;
}

const StoryDetailsPanel = (props: StoryDetailsPanelProps) => {
  const { setStoryDetailsPrompt } = props;

  const [themes, setThemes] = useState<string | null>(null);
  const [quotes, setQuotes] = useState<string>('boy');
  const [adventureType, setAdventureType] = useState<string>('');
  const [genre, setGenre] = useState<string>('');

  useEffect(() => {
    let storyDetails: string[] = [];

    if (themes) storyDetails.push(themes);
    storyDetails.push(quotes);
    storyDetails.push(adventureType);
    storyDetails.push(genre);

    const storyPrompt = storyDetails.join('|');
    setStoryDetailsPrompt(storyPrompt);

    console.log('story details prompt', storyPrompt);
  }, [themes, quotes, adventureType, genre]);

  return (
    <Paper
      elevation={5}
      sx={{ p: 2, justifyContent: 'start', display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant={'h6'} sx={{ mb: 3 }}>
        Customize Your Story!
      </Typography>

      <Paper
        elevation={2}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
          columnGap: '2rem',
          p: 2,
        }}
      >
        <ThemeSelect addTheme={setThemes} />
        <QuoteSelect addQuote={setQuotes} />
      </Paper>
    </Paper>
  );
};

export default StoryDetailsPanel;
