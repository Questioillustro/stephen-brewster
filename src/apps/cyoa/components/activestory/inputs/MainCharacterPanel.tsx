import { Paper } from '@mui/material';
import MainCharacterName from '@/apps/cyoa/components/activestory/inputs/MainCharacterName';
import Typography from '@mui/material/Typography';
import GenderSelect from '@/apps/cyoa/components/activestory/inputs/GenderSelect';
import { useEffect, useState } from 'react';
import SkinColorSelect from '@/apps/cyoa/components/activestory/inputs/SkinColorSelect';

export interface MainCharacterPanelProps {
  setMainCharacterPrompts: (name: string) => void;
}

const MainCharacterPanel = (props: MainCharacterPanelProps) => {
  const { setMainCharacterPrompts } = props;

  const [characterName, setCharacterName] = useState<string | null>(null);
  const [gender, setGender] = useState<string>('boy');
  const [skinColor, setSkinColor] = useState<string>('');

  useEffect(() => {
    let characterAttr: string[] = [];

    if (characterName) characterAttr.push(characterName);
    characterAttr.push(gender);
    characterAttr.push(skinColor);

    const characterPrompt = characterAttr.join('|');
    setMainCharacterPrompts(characterPrompt);
  }, [characterName, gender, skinColor]);

  return (
    <Paper
      elevation={5}
      sx={{ p: 2, justifyContent: 'start', display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant={'h6'} sx={{ mb: 3 }}>
        Customize the Main Character
      </Typography>

      <Paper
        elevation={2}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
          columnGap: '2rem',
          pb: 2,
          pl: 2,
        }}
      >
        <GenderSelect addGender={setGender} />
        <MainCharacterName setCharacterName={setCharacterName} />
      </Paper>

      <SkinColorSelect setSkinColor={setSkinColor} />
    </Paper>
  );
};

export default MainCharacterPanel;
