import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { Box, IconButton, Paper, Stack } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { speciesList } from '@/apps/cyoa/components/inputs/species/speciesList';

interface SpeciesSelectorProps {
  setSpecies: (species: string) => void;
}

const Container = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
`;

const CarouselWrapper = styled(Box)`
  overflow: hidden;
  flex: 1;
  max-width: 576px;
`;

const CarouselTrack = styled(Box)`
  display: flex;
  transition: transform 0.3s ease-in-out;
  gap: 16px;
`;

const SpeciesSquare = styled(Box)<{ selected: boolean }>`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ selected }) => (selected ? '2px solid #1976d2' : '1px solid #ccc')};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#BBBBBB' : '#000000')};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #aaaaaa;
  }
`;

export const SpeciesSelect: React.FC<SpeciesSelectorProps> = ({ setSpecies }) => {
  const [selectedSpecies, setSelectedSpecies] = useState<string>('Human');
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemsPerView = 5;
  const itemWidth = 96; // 80px (width) + 16px (gap)
  const maxScroll = (speciesList.length - itemsPerView) * itemWidth;

  const handleSpeciesClick = (species: string) => {
    setSelectedSpecies(species);
    setSpecies(`Main character species is: ${species}.`);
  };

  const scrollLeft = () => {
    const newPosition = Math.max(scrollPosition - itemWidth * itemsPerView, 0);
    setScrollPosition(newPosition);
  };

  const scrollRight = () => {
    const newPosition = Math.min(scrollPosition + itemWidth * itemsPerView, maxScroll);
    setScrollPosition(newPosition);
  };

  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant={'h6'} sx={{ pb: 1 }}>
        Species
      </Typography>

      <Container>
        <IconButton onClick={scrollLeft} disabled={scrollPosition === 0} sx={{ mr: 1 }}>
          <ChevronLeft />
        </IconButton>

        <CarouselWrapper ref={carouselRef}>
          <CarouselTrack
            sx={{
              transform: `translateX(-${scrollPosition}px)`,
            }}
          >
            {speciesList.map((species) => (
              <SpeciesSquare
                key={species}
                selected={selectedSpecies === species}
                onClick={() => handleSpeciesClick(species)}
              >
                {species}
              </SpeciesSquare>
            ))}
          </CarouselTrack>
        </CarouselWrapper>

        <IconButton onClick={scrollRight} disabled={scrollPosition >= maxScroll} sx={{ ml: 1 }}>
          <ChevronRight />
        </IconButton>
      </Container>
    </Stack>
  );
};
