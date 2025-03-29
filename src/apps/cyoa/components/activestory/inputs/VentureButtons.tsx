// VentureButtons.tsx
import React from 'react';
import { ActiveStoryViews } from '@/apps/cyoa/components/activestory/ActiveStory';
import { StyledVentureButton } from './StyledVentureButton';
import { ButtonContainer } from './ButtonContainer';

export interface IVentureButtonsProps {
  setActiveView: (view: ActiveStoryViews) => void;
}

export const VentureButtons: React.FC<IVentureButtonsProps> = (props: IVentureButtonsProps) => {
  const { setActiveView } = props;

  const buildImageUrl =
    'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/build-a-venture_button.jpg';
  const revisitImageUrl =
    'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/revisit-a-venture_button.jpg';

  return (
    <ButtonContainer>
      <StyledVentureButton imageUrl={buildImageUrl} onClick={() => setActiveView('build')} />
      <StyledVentureButton imageUrl={revisitImageUrl} onClick={() => setActiveView('revisit')} />
    </ButtonContainer>
  );
};

export default VentureButtons;
