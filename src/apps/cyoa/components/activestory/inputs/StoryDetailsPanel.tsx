import { Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import ThemeSelect from '@/apps/cyoa/components/activestory/inputs/ThemeSelect';
import QuoteSelect from '@/apps/cyoa/components/activestory/inputs/QuoteSelect';
import GenreSelect from '@/apps/cyoa/components/activestory/inputs/GenreSelect';
import PlotSelect from '@/apps/cyoa/components/activestory/inputs/PlotSelect';
import ChildrensPlotSelect from '@/apps/cyoa/components/activestory/inputs/ChildrensPlotSelect';

export interface StoryDetailsPanelProps {
  setStoryDetailsPrompt: (name: string) => void;
}

const StoryDetailsPanel = (props: StoryDetailsPanelProps) => {
  const { setStoryDetailsPrompt } = props;

  const [themes, setThemes] = useState<string | null>(null);
  const [quotes, setQuotes] = useState<string>('boy');
  const [adventureType, setAdventureType] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [plot, setPlot] = useState<string>('');

  useEffect(() => {
    let storyDetails: string[] = [];

    if (themes) storyDetails.push(themes);
    if (quotes) storyDetails.push(quotes);
    if (adventureType) storyDetails.push(adventureType);
    if (genre) storyDetails.push(genre);
    if (plot) storyDetails.push(plot);

    const storyPrompt = storyDetails.join('|');
    setStoryDetailsPrompt(storyPrompt);

    console.log('story details prompt', storyPrompt);
  }, [themes, quotes, adventureType, genre, plot]);

  return (
    <Paper
      elevation={5}
      sx={{ p: 2, justifyContent: 'start', display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant={'h6'} sx={{ mb: 3 }}>
        Customize Your Story!
      </Typography>

      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={6}>
          <ThemeSelect addTheme={setThemes} />
        </Grid>
        <Grid item xs={6}>
          <QuoteSelect addQuote={setQuotes} />
        </Grid>
        <Grid item xs={6}>
          <GenreSelect addGenre={setGenre} />
        </Grid>
        <Grid item xs={6}>
          <ChildrensPlotSelect addPlot={setPlot} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StoryDetailsPanel;
