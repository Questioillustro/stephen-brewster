import React, { useContext } from 'react';
import { StyledVentureButton } from './StyledVentureButton';
import { ButtonContainer } from './ButtonContainer';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';
import { AboutBuildAVenture } from '@/apps/cyoa/layout/AboutBuildAVenture';

export const VentureButtons: React.FC = () => {
  const { state, dispatch } = useContext(MainViewContext);

  const buildImageUrl =
    'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/build-a-venture_button.jpg';
  const revisitImageUrl =
    'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/revisit-a-venture_button.jpg';

  return (
    <ButtonContainer>
      <AboutBuildAVenture />
      <StyledVentureButton imageUrl={buildImageUrl} onClick={() => dispatch('BUILD')} />
      <StyledVentureButton imageUrl={revisitImageUrl} onClick={() => dispatch('VIEW_OLD')} />
    </ButtonContainer>
  );
};

export default VentureButtons;
