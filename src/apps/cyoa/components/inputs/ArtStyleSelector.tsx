import React, { useState } from 'react';
import { Button, ButtonGroup, Stack } from '@mui/material';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import StyledDivider from '@/components/dividers/StyledDivider';

// Define the art styles as a constant array
const artStyles = ['Anime', 'Watercolor', 'Studio Ghibli', 'Whimsical Fantasy', 'Cartoon'];

// Styled component for the container to center the buttons
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

// Styled ButtonGroup to ensure consistent styling
const StyledButtonGroup = styled(ButtonGroup)`
  & .MuiButton-root {
    text-transform: none;
    font-size: 16px;
    padding: 8px 16px;
    border-color: #1976d2;
    color: #1976d2;
    &.Mui-selected {
      background-color: #1976d2;
      color: white;
      &:hover {
        background-color: #1565c0;
      }
    }
  }
`;

interface ArtStyleSelectorProps {
  onChange: (selectedStyle: string) => void;
}

const ArtStyleSelector: React.FC<ArtStyleSelectorProps> = ({ onChange }) => {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const handleButtonClick = (style: string) => {
    setSelectedStyle(style);
    onChange(style);
  };

  return (
    <Stack
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Container>
        <StyledDivider />

        <Typography variant={'h6'} sx={{ pb: 2 }}>
          Choose Your Art Style!
        </Typography>

        <StyledButtonGroup variant='outlined'>
          {artStyles.map((style) => (
            <Button
              key={style}
              onClick={() => handleButtonClick(style)}
              className={selectedStyle === style ? 'Mui-selected' : ''}
            >
              {style}
            </Button>
          ))}
        </StyledButtonGroup>

        <StyledDivider />
      </Container>
    </Stack>
  );
};

export default ArtStyleSelector;
