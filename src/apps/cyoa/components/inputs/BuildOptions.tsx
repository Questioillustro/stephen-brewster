import React, { useEffect, useState } from 'react';
import { Button, Paper, Stack } from '@mui/material';
import MainCharacterPanel from '@/apps/cyoa/components/inputs/MainCharacterPanel';
import StoryDetailsPanel from '@/apps/cyoa/components/inputs/StoryDetailsPanel';
import EnvironmentSelect from '@/apps/cyoa/components/inputs/environment/EnvironmentSelect';
import ArtStyleSelector from '@/apps/cyoa/components/inputs/ArtStyleSelector';
import StyledDivider from '@/components/dividers/StyledDivider';
import ArtStyleCarousel from '@/apps/cyoa/components/inputs/artstyle/ArtStyleCarousel';

export interface IBuildOptionsProps {
  setPrompts: (prompts: string, characterPrompts: string, artStyle: string) => void;
}

const BuildOptions: React.FC<IBuildOptionsProps> = (props: IBuildOptionsProps) => {
  const { setPrompts } = props;

  const [mainCharacter, setMainCharacter] = useState<string>('');

  const [storyDetails, setStoryDetails] = useState<string[]>([]);

  const [environment, setEnvironment] = useState<string>('');

  const [artStyle, setArtStyle] = useState<string>('Cartoon');

  const buildAdventure = () => {
    storyDetails.push(environment);
    setPrompts(storyDetails.join(' '), mainCharacter, artStyle);
  };

  useEffect(() => {
    console.log('mainCharacter', mainCharacter);
    console.log('storyDetails', storyDetails);
    console.log('environment', environment);
    console.log('art style', artStyle);
  }, [
    mainCharacter,
    setMainCharacter,
    storyDetails,
    setStoryDetails,
    environment,
    setEnvironment,
    artStyle,
    setArtStyle,
  ]);

  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}>
      <Paper
        elevation={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
          width: '100%',
        }}
      >
        <EnvironmentSelect setEnvironment={setEnvironment} />
      </Paper>

      <Paper
        elevation={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ArtStyleCarousel onChange={setArtStyle} />
      </Paper>

      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
        sx={{ display: 'flex', width: '100%' }}
      >
        <Paper
          elevation={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            width: { sm: '100%', xs: '100%', md: '60%' },
          }}
        >
          <MainCharacterPanel setMainCharacterPrompts={setMainCharacter} />
        </Paper>

        <Paper
          elevation={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: { xs: 2, sm: 2, md: 0 },
            ml: { xs: 0, sm: 0, md: 2 },
            alignItems: 'center',
            width: { sm: '100%', xs: '100%', md: '40%' },
          }}
        >
          <StoryDetailsPanel setStoryDetailsPrompts={setStoryDetails} />

          <Button onClick={() => buildAdventure()} variant={'contained'} sx={{ maxWidth: '300px' }}>
            Build It!
          </Button>

          <StyledDivider />
        </Paper>
      </Stack>
    </Stack>
  );
};

export default BuildOptions;
