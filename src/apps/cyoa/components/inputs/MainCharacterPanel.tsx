import { Box, Paper, Stack } from '@mui/material';
import MainCharacterName from '@/apps/cyoa/components/inputs/character/MainCharacterName';
import Typography from '@mui/material/Typography';
import GenderSelect from '@/apps/cyoa/components/inputs/character/GenderSelect';
import React, { useEffect, useState } from 'react';
import { SpeciesCarousel } from '@/apps/cyoa/components/inputs/species/SpeciesCarousel';
import StyledDivider from '@/components/dividers/StyledDivider';
import SkinColorSelect from '@/apps/cyoa/components/inputs/color/SkinColorSelect';
import HairColorSelect from '@/apps/cyoa/components/inputs/color/HairColorSelect';

export interface MainCharacterPanelProps {
  setMainCharacterPrompts: (name: string) => void;
}

const MainCharacterPanel = (props: MainCharacterPanelProps) => {
  const { setMainCharacterPrompts } = props;

  const [characterName, setCharacterName] = useState<string | null>('random');
  const [gender, setGender] = useState<string>('male');
  const [skinColor, setSkinColor] = useState<string>('');
  const [hairColor, setHairColor] = useState<string>('');
  const [specie, setSpecie] = useState<string>('');

  useEffect(() => {
    let characterAttr: string[] = [];

    if (characterName) characterAttr.push(characterName);
    characterAttr.push(gender);
    characterAttr.push(skinColor);
    characterAttr.push(hairColor);
    characterAttr.push(specie);

    const characterPrompt = characterAttr.join(' ');
    setMainCharacterPrompts(characterPrompt.trim());
  }, [characterName, gender, skinColor, hairColor, specie]);

  return (
    <Stack
      sx={{
        p: 2,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <StyledDivider />

      <Typography variant={'h6'} sx={{ mb: 2 }}>
        Customize Your Character!
      </Typography>

      <Stack
        sx={{
          display: 'flex',
          direction: 'column',
          alignItems: 'center',
          columnGap: '2rem',
        }}
      >
        <MainCharacterName setCharacterName={setCharacterName} />
        <GenderSelect addGender={setGender} />
      </Stack>

      <StyledDivider />

      <Stack sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <SpeciesCarousel setSpecies={setSpecie} />

        <StyledDivider />

        <SkinColorSelect setSkinColor={setSkinColor} />

        <StyledDivider />

        <HairColorSelect setHairColor={setHairColor} />

        <StyledDivider />
      </Stack>
    </Stack>
  );
};

export default MainCharacterPanel;
