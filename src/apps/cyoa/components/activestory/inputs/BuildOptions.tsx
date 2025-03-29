import React, { useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import MainCharacterName from '@/apps/cyoa/components/activestory/inputs/MainCharacterName';
import ThemeSelect from '@/apps/cyoa/components/activestory/inputs/ThemeSelect';
import QuoteSelect from '@/apps/cyoa/components/activestory/inputs/QuoteSelect';
import GenderSelect from '@/apps/cyoa/components/activestory/inputs/GenderSelect';

export interface IBuildOptionsProps {
  setPrompts: (prompts: string[]) => void;
}

const BuildOptions: React.FC<IBuildOptionsProps> = (props: IBuildOptionsProps) => {
  const { setPrompts } = props;

  const [themes, setThemes] = useState<string[]>([]);

  const [quotes, setQuotes] = useState<string[]>([]);

  const [characterName, setCharacterName] = useState<string | null>(null);

  const [gender, setGender] = useState<string>('Random');

  const buildAdventure = () => {
    setPrompts(buildPromptsArray());
  };

  const buildPromptsArray = (): string[] => {
    let allPrompts: string[] = [];
    allPrompts = allPrompts.concat(themes);
    allPrompts = allPrompts.concat(quotes);
    if (characterName !== null) allPrompts.push(characterName);
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

      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          columnGap: '1rem',
          width: '100%',
          flexDirection: 'row',
        }}
      >
        <MainCharacterName setCharacterName={setCharacterName} />
        <GenderSelect addGender={setGender} />
      </Grid>

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
