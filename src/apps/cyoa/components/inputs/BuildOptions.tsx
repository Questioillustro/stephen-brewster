import React, { useEffect, useState } from 'react';
import { Paper, Stack } from '@mui/material';
import MainCharacterPanel from '@/apps/cyoa/components/inputs/MainCharacterPanel';
import StoryDetailsPanel from '@/apps/cyoa/components/inputs/StoryDetailsPanel';
import StyledDivider from '@/components/dividers/StyledDivider';
import ArtStyleCarousel from '@/apps/cyoa/components/inputs/artstyle/ArtStyleCarousel';
import EnvironmentCarousel from '@/apps/cyoa/components/inputs/environment/EnvironmentCarousel';
import styled from '@emotion/styled';
import { BuildItButton } from '@/apps/cyoa/components/inputs/buttons/BuildItButton';

export interface IBuildOptionsProps {
  setPrompts: (prompts: string, characterPrompts: string, artStyle: string) => void;
}

const BuildOptionPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  width: 100%;
`;

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
      <BuildOptionPaper elevation={2}>
        <StyledDivider />
        <EnvironmentCarousel setEnvironment={setEnvironment} />
        <StyledDivider />
      </BuildOptionPaper>

      <BuildOptionPaper elevation={2}>
        <StyledDivider />
        <ArtStyleCarousel onChange={setArtStyle} />
        <StyledDivider />
      </BuildOptionPaper>

      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
        sx={{ display: 'flex', width: '100%' }}
      >
        <BuildOptionPaper
          elevation={2}
          sx={{
            width: { sm: '100%', xs: '100%', md: '60%' },
          }}
        >
          <MainCharacterPanel setMainCharacterPrompts={setMainCharacter} />
        </BuildOptionPaper>

        <BuildOptionPaper
          elevation={2}
          sx={{
            mt: { xs: 2, sm: 2, md: 0 },
            ml: { xs: 0, sm: 0, md: 2 },
            width: { sm: '100%', xs: '100%', md: '40%' },
          }}
        >
          <StoryDetailsPanel setStoryDetailsPrompts={setStoryDetails} />

          <BuildItButton onClick={buildAdventure} />

          <StyledDivider />
        </BuildOptionPaper>
      </Stack>
    </Stack>
  );
};

export default BuildOptions;
