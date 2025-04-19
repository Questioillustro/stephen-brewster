import React, { useEffect, useState } from 'react';
import { Box, Button, Paper } from '@mui/material';
import MainCharacterPanel from '@/apps/cyoa/components/inputs/MainCharacterPanel';
import StoryDetailsPanel from '@/apps/cyoa/components/inputs/StoryDetailsPanel';
import EnvironmentSelect from '@/apps/cyoa/components/inputs/EnvironmentSelect';
import ArtStyleSelector from '@/apps/cyoa/components/inputs/ArtStyleSelector';

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
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}>
      <EnvironmentSelect setEnvironment={setEnvironment} />

      <ArtStyleSelector onChange={setArtStyle} />

      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <MainCharacterPanel setMainCharacterPrompts={setMainCharacter} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            width: '100%',
          }}
        >
          <StoryDetailsPanel setStoryDetailsPrompts={setStoryDetails} />

          <Button onClick={() => buildAdventure()} variant={'contained'} sx={{ maxWidth: '300px' }}>
            Build It!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BuildOptions;
