import { Box, Paper, Stack } from '@mui/material';
import MainCharacterName from '@/apps/cyoa/components/inputs/MainCharacterName';
import Typography from '@mui/material/Typography';
import GenderSelect from '@/apps/cyoa/components/inputs/GenderSelect';
import React, { useEffect, useState } from 'react';
import SkinColorSelect from '@/apps/cyoa/components/inputs/SkinColorSelect';
import HairColorSelect from '@/apps/cyoa/components/inputs/HairColorSelect';
import { SpeciesSelect } from '@/apps/cyoa/components/inputs/species/SpeciesSelect';
import StyledDivider from '@/components/dividers/StyledDivider';

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
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <StyledDivider />

      <Typography variant={'h6'}>Customize Your Character!</Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: '2rem',
        }}
      >
        <GenderSelect addGender={setGender} />
        <MainCharacterName setCharacterName={setCharacterName} />
      </Box>

      <StyledDivider />

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <SpeciesSelect setSpecies={setSpecie} />

        <StyledDivider />

        <SkinColorSelect setSkinColor={setSkinColor} />

        <StyledDivider />

        <HairColorSelect setHairColor={setHairColor} />

        <StyledDivider />
      </Box>
    </Stack>
  );
};

export default MainCharacterPanel;
