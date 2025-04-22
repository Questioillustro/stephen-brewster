import { Box, Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import ThemeSelect from '@/apps/cyoa/components/inputs/autocomplete/ThemeSelect';
import GenreSelect from '@/apps/cyoa/components/inputs/autocomplete/GenreSelect';
import ChildrensPlotSelect from '@/apps/cyoa/components/inputs/autocomplete/ChildrensPlotSelect';
import StyledDivider from '@/components/dividers/StyledDivider';

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
    <Stack
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
      }}
    >
      <StyledDivider />

      <Typography variant={'h6'} sx={{ mb: 3 }}>
        Customize Your Story!
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', rowGap: 2 }}>
        <ThemeSelect addTheme={setThemes} />

        <GenreSelect addGenre={setGenre} />

        <ChildrensPlotSelect addPlot={setPlot} />
      </Box>
    </Stack>
  );
};

export default StoryDetailsPanel;
