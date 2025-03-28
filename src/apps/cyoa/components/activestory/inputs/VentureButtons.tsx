import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ActiveStoryViews } from '@/apps/cyoa/components/activestory/ActiveStory';

const ButtonContainer = styled('div')({
  display: 'flex',
  width: '100%',
  gap: '1.25rem',
  maxWidth: '775px',
  margin: '1rem',
  flexDirection: 'column',
});

const StyledButton = styled(Button)({
  flex: 1,
  maxHeight: '250px',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

export interface IVentureButtonsProps {
  setActiveView: (view: ActiveStoryViews) => void;
}

const VentureButtons: React.FC<IVentureButtonsProps> = (props: IVentureButtonsProps) => {
  const { setActiveView } = props;
  return (
    <ButtonContainer>
      <StyledButton
        variant='contained'
        onClick={() => setActiveView('build')}
        sx={{
          backgroundImage:
            "url('https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/build-a-venture_button.jpg')",
          backgroundColor: 'black',
          borderRadius: '12px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          '&:hover': {
            backgroundColor: '#FFFFFF',
            transform: 'scale(1.05)',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          },
        }}
      ></StyledButton>
      <StyledButton
        variant='contained'
        onClick={() => setActiveView('revisit')}
        sx={{
          backgroundImage:
            "url('https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/revisit-a-venture_button.jpg')",
          backgroundColor: 'black',
          borderRadius: '12px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          '&:hover': {
            backgroundColor: '#FFFFFF',
            transform: 'scale(1.05)',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          },
        }}
      ></StyledButton>
    </ButtonContainer>
  );
};

export default VentureButtons;
