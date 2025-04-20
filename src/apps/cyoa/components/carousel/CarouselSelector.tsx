import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { Box, Button, Stack, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import StyledDivider from '@/components/dividers/StyledDivider';

export interface CarouselItem {
  id: string;
  name: string;
  [key: string]: any;
}

interface CarouselSelectorProps {
  items: CarouselItem[];
  title: string;
  itemWidth: number;
  defaultSelectedId?: string;
  onSelect: (item: CarouselItem) => void;
  renderItem: (item: CarouselItem, selected: boolean, onClick: () => void) => JSX.Element;
  useDividers?: boolean;
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

const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const CarouselSelector: React.FC<CarouselSelectorProps> = ({
  items,
  title,
  itemWidth,
  defaultSelectedId,
  onSelect,
  renderItem,
  useDividers = false,
}) => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(
    defaultSelectedId || items[0]?.id || null,
  );
  const [scrollPosition, setScrollPosition] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [containerWidth, setContainerWidth] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const totalItemsWidth = items.length * itemWidth;
  const maxScroll = Math.max(totalItemsWidth - containerWidth, 0);

  // Update itemsPerView and containerWidth with debouncing
  const updateDimensions = useCallback(
    debounce(() => {
      if (carouselRef.current) {
        const newContainerWidth = carouselRef.current.offsetWidth;
        const calculatedItems = Math.floor(newContainerWidth / itemWidth);
        const newItemsPerView = Math.max(1, calculatedItems);
        setContainerWidth(newContainerWidth);
        if (newItemsPerView !== itemsPerView) {
          setItemsPerView(newItemsPerView);
        }
        // Recalculate scroll position to keep items centered
        setScrollPosition((prev) => {
          const centerOffset = (newContainerWidth - itemWidth * newItemsPerView) / 2;
          return Math.min(Math.max(prev, -centerOffset), maxScroll);
        });
      }
    }, 100),
    [itemsPerView, itemWidth],
  );

  // Set up ResizeObserver
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => updateDimensions());
    if (carouselRef.current) {
      resizeObserver.observe(carouselRef.current);
    }

    // Initial calculation
    updateDimensions();

    // Clean up
    return () => {
      if (carouselRef.current) {
        resizeObserver.unobserve(carouselRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [updateDimensions]);

  const handleItemClick = (item: CarouselItem) => {
    setSelectedItemId(item.id);
    onSelect(item);
    // Center the selected item
    const itemIndex = items.findIndex((i) => i.id === item.id);
    const centerOffset = (containerWidth - itemWidth) / 2;
    const newScroll = itemIndex * itemWidth - centerOffset;
    setScrollPosition(Math.max(0, Math.min(newScroll, maxScroll)));
  };

  const scrollLeft = () => {
    const centerOffset = (containerWidth - itemWidth * itemsPerView) / 2;
    const newPosition = Math.max(scrollPosition - itemWidth * itemsPerView, -centerOffset);
    setScrollPosition(newPosition);
  };

  const scrollRight = () => {
    const centerOffset = (containerWidth - itemWidth * itemsPerView) / 2;
    const newPosition = Math.min(
      scrollPosition + itemWidth * itemsPerView,
      maxScroll + centerOffset,
    );
    setScrollPosition(newPosition);
  };

  // Calculate transform with centering
  const centerOffset = (containerWidth - itemWidth * itemsPerView) / 2;
  const adjustedScroll = scrollPosition + centerOffset;

  return (
    <Stack sx={{ width: '100%', mt: useDividers ? 2 : 0, pb: useDividers ? 2 : 0 }}>
      {useDividers && <StyledDivider />}
      <Typography
        variant='h6'
        sx={{ pb: 2, justifyContent: 'center', width: '100%', display: 'flex' }}
      >
        {title}
      </Typography>

      <Container>
        <Button
          onClick={scrollLeft}
          variant='contained'
          disabled={scrollPosition <= -centerOffset}
          sx={{ display: 'flex', height: '100%', m: 1 }}
        >
          <ChevronLeft />
        </Button>

        <CarouselWrapper ref={carouselRef}>
          <CarouselTrack
            sx={{
              transform: `translateX(-${adjustedScroll}px)`,
            }}
          >
            {items.map((item) => (
              <Box key={item.id}>
                {renderItem(item, selectedItemId === item.id, () => handleItemClick(item))}
              </Box>
            ))}
          </CarouselTrack>
        </CarouselWrapper>

        <Button
          onClick={scrollRight}
          variant='contained'
          disabled={scrollPosition >= maxScroll + centerOffset}
          sx={{ display: 'flex', height: '100%', m: 1 }}
        >
          <ChevronRight />
        </Button>
      </Container>

      {useDividers && <StyledDivider />}
    </Stack>
  );
};

export default CarouselSelector;
