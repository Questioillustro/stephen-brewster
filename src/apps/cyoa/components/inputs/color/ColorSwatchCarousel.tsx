import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Button, Stack, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface ColorOption {
  name: string;
  hex: string;
}

const colorOptions: ColorOption[] = [
  { name: 'Ruby Red', hex: '#E0115F' },
  { name: 'Coral', hex: '#FF7F50' },
  { name: 'Tangerine', hex: '#FF8C00' },
  { name: 'Sunflower', hex: '#FFC107' },
  { name: 'Golden Tan', hex: '#D4A373' },
  { name: 'Mint', hex: '#98FF98' },
  { name: 'Emerald Green', hex: '#50C878' },
  { name: 'Turquoise', hex: '#40E0D0' },
  { name: 'Sky Blue', hex: '#87CEEB' },
  { name: 'Lavender', hex: '#E6E6FA' },
  { name: 'Amethyst', hex: '#9966CC' },
  { name: 'Violet', hex: '#EE82EE' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Pale Rose', hex: '#F8D8D8' },
  { name: 'Rich Cocoa', hex: '#5C4033' },
  { name: 'Ebony', hex: '#3A2E28' },
];

interface ColorSelectorProps {
  onColorSelect?: (color: string) => void;
  title?: string;
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
  max-width: 100%;
`;

const CarouselTrack = styled(Box)`
  display: flex;
  transition: transform 0.3s ease-in-out;
  gap: 16px;
`;

const ColorSquare = styled(Box)<{ selected: boolean; hex: string }>`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ selected }) => (selected ? '2px solid #1976d2' : '1px solid #ccc')};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ hex }) => hex};
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const ColorSwatchCarousel: React.FC<ColorSelectorProps> = ({ onColorSelect, title }) => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[0]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4); // Initial value

  const carouselRef = useRef<HTMLDivElement>(null);
  const itemWidth = 96; // 80px (width) + 16px (gap)
  const maxScroll = (colorOptions.length - itemsPerView) * itemWidth;

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

  const handleColorClick = (color: ColorOption) => {
    setSelectedColor(color);
    if (onColorSelect) {
      onColorSelect(color.name);
    }
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
    <Stack sx={{ width: '100%', mt: 2, pb: 2 }}>
      <Typography
        variant='h6'
        sx={{ pb: 2, justifyContent: 'center', width: '100%', display: 'flex' }}
      >
        {title || 'Color Swatch'}
      </Typography>

      <Container>
        <Button
          onClick={scrollLeft}
          variant='contained'
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
            {colorOptions.map((color) => (
              <ColorSquare
                key={color.hex}
                selected={selectedColor.hex === color.hex}
                hex={color.hex}
                onClick={() => handleColorClick(color)}
                title={color.name}
              />
            ))}
          </CarouselTrack>
        </CarouselWrapper>

        <Button
          onClick={scrollRight}
          variant='contained'
          disabled={scrollPosition >= maxScroll}
          sx={{ display: 'flex', height: '100%', m: 1 }}
        >
          <ChevronRight />
        </Button>
      </Container>
    </Stack>
  );
};
