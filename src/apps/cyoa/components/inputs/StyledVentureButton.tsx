import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  padding: 0,
  minWidth: 'auto',
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
        padding: 0,
        backgroundColor: 'black',
        borderRadius: '0.75rem',
        boxShadow: '0 0.1875rem 0.3125rem 0.125rem rgba(255, 255, 255, .3)',
        '&:hover': {
          backgroundColor: '#FFFFFF',
          transform: 'scale(1.05)',
          boxShadow: '0 0.3125rem 0.9375rem rgba(0,0,0,0.3)',
        },
      }}
    >
      <img
        src={imageUrl}
        alt=''
        style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '0.75rem' }}
      />
    </StyledButton>
  );
};

export default StyledVentureButton;
