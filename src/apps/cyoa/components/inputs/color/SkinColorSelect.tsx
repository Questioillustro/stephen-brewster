import ColorSwatchCarousel from '@/apps/cyoa/components/inputs/color/ColorSwatchCarousel';

export interface SkinColorSelectProps {
  setSkinColor: (hex: string) => void;
}

const MainCharacterSkinColor = (props: SkinColorSelectProps) => {
  const { setSkinColor } = props;

  const colorChanged = (color: string) => {
    setSkinColor(`Main character's skin color is: ${color}.`);
  };

  return <ColorSwatchCarousel onColorSelect={colorChanged} title={'Skin Color'} />;
};

export default MainCharacterSkinColor;
