import { Box } from '@mui/material';
import ColorSwatchCarousel from '@/apps/cyoa/components/inputs/color/ColorSwatchCarousel';

export interface SkinColorSelectProps {
  setSkinColor: (hex: string) => void;
}

const MainCharacterSkinColor = (props: SkinColorSelectProps) => {
  const { setSkinColor } = props;

  const colorChanged = (color: string) => {
    setSkinColor(`Main character's skin color is: ${color}.`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ColorSwatchCarousel onColorSelect={colorChanged} title={'Skin Color'} />
    </Box>
  );
};

export default MainCharacterSkinColor;
