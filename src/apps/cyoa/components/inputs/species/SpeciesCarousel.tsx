import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Button, Stack } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { speciesList } from '@/apps/cyoa/components/inputs/species/speciesList';

interface SpeciesSelectorProps {
  setSpecies: (species: string) => void;
}

const Container = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 105px;
  width: 100%;
  max-width: 100%;
`;

const CarouselWrapper = styled(Box)`
  overflow: hidden;
  flex: 1;
  max-width: '100%';
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

export const SpeciesCarousel: React.FC<SpeciesSelectorProps> = ({ setSpecies }) => {
  const [selectedSpecies, setSelectedSpecies] = useState<string>('Human');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4); // Initial value

  const carouselRef = useRef<HTMLDivElement>(null);
  const itemWidth = 96; // 80px (width) + 16px (gap)
  const maxScroll = (speciesList.length - itemsPerView) * itemWidth;

  // Calculate itemsPerView based on container width
  const updateItemsPerView = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const calculatedItems = Math.floor(containerWidth / itemWidth);
      setItemsPerView(Math.max(1, calculatedItems)); // Ensure at least 1 item
    }
  };

  // Update itemsPerView on mount and window resize
  useEffect(() => {
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

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
    <Stack sx={{ width: '100%' }}>
      <Typography variant={'h6'} sx={{ justifyContent: 'center', width: '100%', display: 'flex' }}>
        Species
      </Typography>

      <Container>
        <Button
          onClick={scrollLeft}
          variant={'contained'}
          disabled={scrollPosition === 0}
          sx={{ display: 'flex', height: '100%', m: 1 }}
        >
          <ChevronLeft />
        </Button>

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

        <Button
          onClick={scrollRight}
          variant={'contained'}
          disabled={scrollPosition >= maxScroll}
          sx={{ display: 'flex', height: '100%', m: 1 }}
        >
          <ChevronRight />
        </Button>
      </Container>
    </Stack>
  );
};
