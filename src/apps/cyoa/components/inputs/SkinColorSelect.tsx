import { ColorSwatch } from '@/apps/cyoa/components/inputs/ColorSwatch';
import { Box } from '@mui/material';

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
        p: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ColorSwatch onColorSelect={colorChanged} title={'Skin Color'} />
    </Box>
  );
};

export default MainCharacterSkinColor;
