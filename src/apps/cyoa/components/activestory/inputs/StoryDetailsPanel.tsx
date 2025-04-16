import { Box, Grid, Paper } from '@mui/material';
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

    console.log('storyPrompt updated:', storyPrompt);
  }, [themes, quotes, adventureType, genre, plot]);

  return (
    <Paper
      elevation={5}
      sx={{
        p: 2,
        justifyContent: 'start',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Typography variant={'h6'} sx={{ mb: 3 }}>
        Customize Your Story!
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', rowGap: 2 }}>
        <ThemeSelect addTheme={setThemes} />

        <GenreSelect addGenre={setGenre} />

        <ChildrensPlotSelect addPlot={setPlot} />
      </Box>
    </Paper>
  );
};

export default StoryDetailsPanel;
