import { Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import ThemeSelect from '@/apps/cyoa/components/inputs/ThemeSelect';
import GenreSelect from '@/apps/cyoa/components/inputs/GenreSelect';
import ChildrensPlotSelect from '@/apps/cyoa/components/inputs/plot/ChildrensPlotSelect';

export interface StoryDetailsPanelProps {
  setStoryDetailsPrompts: (prompts: string[]) => void;
}

const StoryDetailsPanel = (props: StoryDetailsPanelProps) => {
  const { setStoryDetailsPrompts } = props;

  const [themes, setThemes] = useState<string | null>(null);
  const [adventureType, setAdventureType] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [plot, setPlot] = useState<string>('');

  useEffect(() => {
    let storyDetails: string[] = [];

    if (themes) storyDetails.push(themes);
    if (adventureType) storyDetails.push(adventureType);
    if (genre) storyDetails.push(genre);
    if (plot) storyDetails.push(plot);

    setStoryDetailsPrompts(storyDetails);
  }, [themes, adventureType, genre, plot]);

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        justifyContent: 'start',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
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
