import { Box } from '@mui/material';
import ColorSwatchCarousel from '@/apps/cyoa/components/inputs/color/ColorSwatchCarousel';

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
      <ColorSwatchCarousel onColorSelect={colorChanged} title={'Hair Color'} />
    </Box>
  );
};

export default MainCharacterHairColor;
