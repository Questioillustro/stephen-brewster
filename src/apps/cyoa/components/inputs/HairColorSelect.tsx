import { ColorSwatch } from '@/apps/cyoa/components/inputs/ColorSwatch';
import { Box } from '@mui/material';

export interface HairColorSelectProps {
  setHairColor: (hex: string) => void;
}

const MainCharacterHairColor = (props: HairColorSelectProps) => {
  const { setHairColor } = props;

  const colorChanged = (color: string) => {
    setHairColor(`Main character's hair color is: ${color}.`);
  };

  return (
    <Box sx={{ p: 0 }}>
      <ColorSwatch onColorSelect={colorChanged} title={'Hair Color'} />
    </Box>
  );
};

export default MainCharacterHairColor;
