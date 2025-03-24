import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ActiveStoryViews } from '@/apps/cyoa/components/activestory/ActiveStory';

const ButtonContainer = styled('div')({
  display: 'flex',
  width: '100%',
  gap: '1.25rem', // Optional: adds space between buttons
  flexDirection: 'column',
});

const StyledButton = styled(Button)({
  flex: 1, // Each button takes approximately half the space
  margin: '2rem',
});

export interface IVentureButtonsProps {
  setActiveView: (view: ActiveStoryViews) => void;
}

const VentureButtons: React.FC<IVentureButtonsProps> = (props: IVentureButtonsProps) => {
  const { setActiveView } = props;
  return (
    <ButtonContainer>
      <StyledButton variant='contained' onClick={() => setActiveView('build')}>
        Build-A-Venture
      </StyledButton>
      <StyledButton variant='contained' onClick={() => setActiveView('revisit')}>
        Revisit-A-Venture
      </StyledButton>
    </ButtonContainer>
  );
};

export default VentureButtons;
