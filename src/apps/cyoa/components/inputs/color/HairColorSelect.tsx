import ColorSwatchCarousel from '@/apps/cyoa/components/inputs/color/ColorSwatchCarousel';

export interface HairColorSelectProps {
  setHairColor: (hex: string) => void;
}

const MainCharacterHairColor = (props: HairColorSelectProps) => {
  const { setHairColor } = props;

  const colorChanged = (color: string) => {
    setHairColor(`Main character's hair color is: ${color}.`);
  };

  return <ColorSwatchCarousel onColorSelect={colorChanged} title={'Hair Color'} />;
};

export default MainCharacterHairColor;
