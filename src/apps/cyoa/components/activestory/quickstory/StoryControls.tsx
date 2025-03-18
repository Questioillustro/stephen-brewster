import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StoryTile from '../../storygrid/StoryTile';
import React, { useState } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import QuoteSelect from '../inputs/QuoteSelect';
import MainCharacterName from '../inputs/MainCharacterName';
import ThemeSelect from '../inputs/ThemeSelect';
import { IAdventure } from '../../../api/AdventureService';
import { IStory } from '../../../api/StoryService';

export interface QuickStoryControls {
  story: IStory;
  adventures: IAdventure[];
  showingText: boolean;
  setStoryIndex: (idx: number | null) => void;
  getQuickAdventure: (id: string, prompts: string[]) => void;
  currentVersionNumber: number;
  previousVersion: () => void;
  nextVersion: () => void;
}

const StoryControls = (props: QuickStoryControls) => {
  const {
    story,
    adventures,
    showingText,
    setStoryIndex,
    getQuickAdventure,
    currentVersionNumber,
    previousVersion,
    nextVersion,
  } = props;

  const [themes, setThemes] = useState<string[]>([]);

  const [quotes, setQuotes] = useState<string[]>([]);

  const [age, setAge] = useState<number>(8);

  const [characterName, setCharacterName] = useState<string | null>(null);

  const buildAdventure = (id: string) => {
    getQuickAdventure(id, buildPromptsArray());
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
        minWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
      }}
      sx={{ p: 2 }}
    >
      <Button
        variant={'contained'}
        color={'secondary'}
        startIcon={<ArrowBackIosIcon color={'primary'} />}
        onClick={() => setStoryIndex(null)}
        sx={{ p: 2 }}
      >
        <Typography variant={'h4'} color={'primary'}>
          Back
        </Typography>
      </Button>

      <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
        <StoryTile story={story} />

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
            New Story
          </Typography>

          <Grid sx={{ display: 'flex', rowGap: '1rem', flexDirection: 'column' }}>
            <MainCharacterName setCharacterName={setCharacterName} />
          </Grid>

          <Grid sx={{ display: 'flex', columnGap: '1rem', flexDirection: 'row' }}>
            <ThemeSelect addTheme={addTheme} />

            <QuoteSelect addQuote={addQuote} />
          </Grid>

          <Button
            onClick={() => buildAdventure(story._id)}
            variant={'contained'}
            disabled={!showingText}
          >
            Get New Story
          </Button>

          <Paper square elevation={1} sx={{ p: 2 }}>
            <Typography variant={'h6'} color={'primary'}>
              Existing Stories
            </Typography>

            <Typography variant={'body1'} color={'secondary'}>
              View previously generated stories
            </Typography>

            <Grid container spacing={2} sx={{ p: 2 }}>
              <Grid item>
                <Button
                  startIcon={<ArrowBack />}
                  onClick={previousVersion}
                  disabled={currentVersionNumber === 0 || !showingText}
                  variant={'outlined'}
                >
                  Previous Version
                </Button>
              </Grid>

              <Grid item>
                <Button
                  endIcon={<ArrowForward />}
                  onClick={nextVersion}
                  disabled={currentVersionNumber + 1 === adventures.length || !showingText}
                  variant={'outlined'}
                >
                  Next Version
                </Button>
              </Grid>
            </Grid>

            <Typography variant={'body2'} color={'secondary'}>
              Currently displaying version: {currentVersionNumber + 1} / {adventures.length}
            </Typography>
          </Paper>
        </Paper>
      </Grid>
    </Paper>
  );
};

export default StoryControls;
