// StyledVentureButton.tsx
import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  flex: 1,
  maxHeight: '250px',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

export interface IStyledVentureButtonProps {
  imageUrl: string;
  onClick: () => void;
}

export const StyledVentureButton: React.FC<IStyledVentureButtonProps> = ({ imageUrl, onClick }) => {
  return (
    <StyledButton
      variant='contained'
      onClick={onClick}
      sx={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundColor: 'black',
        borderRadius: '12px',
        boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
        '&:hover': {
          backgroundColor: '#FFFFFF',
          transform: 'scale(1.05)',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
        },
      }}
    />
  );
};

export default StyledVentureButton;
