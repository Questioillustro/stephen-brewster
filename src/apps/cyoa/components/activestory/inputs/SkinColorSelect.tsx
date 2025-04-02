import { ColorSwatch } from '@/apps/cyoa/components/activestory/inputs/ColorSwatch';

export interface SkinColorSelectProps {
  setSkinColor: (hex: string) => void;
}

const MainCharacterSkinColor = (props: SkinColorSelectProps) => {
  const { setSkinColor } = props;

  const colorChanged = (color: string) => {
    setSkinColor(`Main character's skin color is ${color}`);
  };

  return <ColorSwatch onColorSelect={colorChanged} title={'Skin Color'} />;
};

export default MainCharacterSkinColor;
