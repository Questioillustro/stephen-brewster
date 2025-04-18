import { Box, Paper } from '@mui/material';
import MainCharacterName from '@/apps/cyoa/components/activestory/inputs/MainCharacterName';
import Typography from '@mui/material/Typography';
import GenderSelect from '@/apps/cyoa/components/activestory/inputs/GenderSelect';
import { useEffect, useState } from 'react';
import SkinColorSelect from '@/apps/cyoa/components/activestory/inputs/SkinColorSelect';
import HairColorSelect from '@/apps/cyoa/components/activestory/inputs/HairColorSelect';
import { SpeciesSelect } from '@/apps/cyoa/components/activestory/inputs/SpeciesSelect';

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
    <Paper
      elevation={5}
      sx={{
        p: 2,
        justifyContent: 'start',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant={'h6'} sx={{ mb: 3 }}>
        Customize Your Character!
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
          columnGap: '2rem',
          pl: 2,
        }}
      >
        <GenderSelect addGender={setGender} />
        <MainCharacterName setCharacterName={setCharacterName} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <SpeciesSelect setSpecies={setSpecie} />

        <SkinColorSelect setSkinColor={setSkinColor} />

        <HairColorSelect setHairColor={setHairColor} />
      </Box>
    </Paper>
  );
};

export default MainCharacterPanel;
