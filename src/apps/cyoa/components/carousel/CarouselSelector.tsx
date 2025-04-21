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
  width: 100%;
  max-width: 100%;
`;

const CarouselWrapper = styled(Box)`
  overflow: hidden;
  flex: 1;
  max-width: 100%;
`;

const CarouselTrack = styled(Box)<{ isCentered: boolean }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  gap: 16px;
  justify-content: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
  width: ${({ isCentered }) => (isCentered ? 'auto' : '100%')};
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
  const [isCentered, setIsCentered] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const totalItemsWidth = items.length * itemWidth;
  const maxScroll = Math.max(totalItemsWidth - containerWidth, 0);

  // Update itemsPerView, containerWidth, and centering logic with debouncing
  const updateDimensions = useCallback(
    debounce(() => {
      if (carouselRef.current) {
        const newContainerWidth = carouselRef.current.offsetWidth;
        const calculatedItems = Math.floor(newContainerWidth / itemWidth);
        const newItemsPerView = Math.max(1, calculatedItems);
        setContainerWidth(newContainerWidth);
        setIsCentered(newContainerWidth > totalItemsWidth);
        if (newItemsPerView !== itemsPerView) {
          setItemsPerView(newItemsPerView);
        }
      }
    }, 100),
    [itemsPerView, itemWidth, totalItemsWidth],
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
    <Stack sx={{ mt: useDividers ? 2 : 0, pb: useDividers ? 2 : 0 }}>
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
          disabled={scrollPosition <= 0 || isCentered}
          sx={{
            display: 'flex',
            height: '100%',
            m: 1,
            minWidth: { xs: '30px', sm: '40px' },
            padding: { xs: '0 4px', sm: '0 8px' },
          }}
        >
          <ChevronLeft sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
        </Button>

        <CarouselWrapper ref={carouselRef}>
          <CarouselTrack
            isCentered={isCentered}
            sx={{
              transform: `translateX(-${scrollPosition}px)`,
            }}
          >
            {items.map((item) => (
              <Box key={item.id} sx={{ flexShrink: 0 }}>
                {renderItem(item, selectedItemId === item.id, () => handleItemClick(item))}
              </Box>
            ))}
          </CarouselTrack>
        </CarouselWrapper>

        <Button
          onClick={scrollRight}
          variant='contained'
          disabled={scrollPosition >= maxScroll || isCentered}
          sx={{
            display: 'flex',
            height: '100%',
            m: 1,
            minWidth: { xs: '30px', sm: '40px' },
            padding: { xs: '0 4px', sm: '0 8px' },
          }}
        >
          <ChevronRight sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
        </Button>
      </Container>

      {useDividers && <StyledDivider />}
    </Stack>
  );
};

export default CarouselSelector;
