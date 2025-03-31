import React, { useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import ThemeSelect from '@/apps/cyoa/components/activestory/inputs/ThemeSelect';
import QuoteSelect from '@/apps/cyoa/components/activestory/inputs/QuoteSelect';
import MainCharacterPanel from '@/apps/cyoa/components/activestory/inputs/MainCharacterPanel';

export interface IBuildOptionsProps {
  setPrompts: (prompts: string[], characterPrompts: string) => void;
}

const BuildOptions: React.FC<IBuildOptionsProps> = (props: IBuildOptionsProps) => {
  const { setPrompts } = props;

  const [themes, setThemes] = useState<string[]>([]);

  const [quotes, setQuotes] = useState<string[]>([]);

  const [mainCharacter, setMainCharacter] = useState<string>('');

  const buildAdventure = () => {
    setPrompts(buildPromptsArray(), mainCharacter);
  };

  const buildPromptsArray = (): string[] => {
    let allPrompts: string[] = [];
    allPrompts = allPrompts.concat(themes);
    allPrompts = allPrompts.concat(quotes);
    return allPrompts;
  };

  const addQuote = (quotePrompt: string) => {
    if (quotePrompt !== '') {
      const newQuotes: string[] = [];
      newQuotes.concat(quotes);
      newQuotes.push(quotePrompt);
      setQuotes(newQuotes);
    } else {
      setQuotes([]);
    }
  };

  const addTheme = (themePrompt: string) => {
    if (themePrompt !== '') {
      const newThemes: string[] = [];
      newThemes.concat(quotes);
      newThemes.push(themePrompt);
      setThemes(newThemes);
    } else {
      setThemes([]);
    }
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

      <Grid sx={{ display: 'flex', columnGap: '1rem', flexDirection: 'row' }}>
        <ThemeSelect addTheme={addTheme} />

        <QuoteSelect addQuote={addQuote} />
      </Grid>

      <Button onClick={() => buildAdventure()} variant={'contained'}>
        Generate Story
      </Button>
    </Paper>
  );
};

export default BuildOptions;
