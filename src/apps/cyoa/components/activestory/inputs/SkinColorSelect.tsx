import { ColorSelector } from '@/apps/cyoa/components/activestory/inputs/ColorSelect';

export interface SkinColorSelectProps {
  setSkinColor: (hex: string) => void;
}

const MainCharacterName = (props: SkinColorSelectProps) => {
  const { setSkinColor } = props;

  const colorChanged = (color: string) => {
    setSkinColor(`Main character's skin color is ${color}`);
  };

  return <ColorSelector onColorSelect={colorChanged} />;
};

export default MainCharacterName;
