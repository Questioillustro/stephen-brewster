import { ColorSwatch } from '@/apps/cyoa/components/activestory/inputs/ColorSwatch';

export interface HairColorSelectProps {
  setHairColor: (hex: string) => void;
}

const MainCharacterHairColor = (props: HairColorSelectProps) => {
  const { setHairColor } = props;

  const colorChanged = (color: string) => {
    setHairColor(`Main character's hair color is ${color}`);
  };

  return <ColorSwatch onColorSelect={colorChanged} title={'Hair Color'} />;
};

export default MainCharacterHairColor;
