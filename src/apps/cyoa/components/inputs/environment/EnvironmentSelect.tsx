import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { environmentList } from '@/apps/cyoa/components/inputs/environment/environmentList';

interface EnvironmentSelectorProps {
  setEnvironment: (environment: string) => void;
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
  width: 100%;
`;

const CarouselTrack = styled(Box)`
  display: flex;
  transition: transform 0.3s ease-in-out;
  gap: 16px;
`;

const EnvironmentSquare = styled(Box)<{ selected: boolean }>`
  width: 105px;
  height: 105px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${({ selected }) => (selected ? '4px solid #1976d2' : '2px solid #ccc')};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#BBBBBB' : '#000000')};
  &:hover {
    background-color: #aaaaaa;
  }
`;

const EnvironmentImage = styled('img')`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const EnvironmentSelect: React.FC<EnvironmentSelectorProps> = ({ setEnvironment }) => {
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>(environmentList[0].name);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4); // Initial value
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemWidth = 123; // Width of each item (105px + 16px gap)

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

  // Calculate maxScroll dynamically
  const maxScroll = (environmentList.length - itemsPerView) * itemWidth;

  const handleEnvironmentClick = (environment: (typeof environmentList)[0]) => {
    setSelectedEnvironment(environment.name);
    setEnvironment(`The story setting is: ${environment.prompt}.`);
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
    <Paper elevation={2} sx={{ width: '100%', mt: 2, pb: 2 }}>
      <Typography
        variant={'h6'}
        sx={{ p: 2, justifyContent: 'center', width: '100%', display: 'flex' }}
      >
        Choose a Setting!
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
            {environmentList.map((environment) => (
              <Box key={environment._id}>
                <EnvironmentSquare
                  selected={selectedEnvironment === environment.name}
                  onClick={() => handleEnvironmentClick(environment)}
                >
                  <EnvironmentImage src={environment.imageUrl} alt={environment.name} />
                </EnvironmentSquare>
              </Box>
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
    </Paper>
  );
};

export default EnvironmentSelect;
