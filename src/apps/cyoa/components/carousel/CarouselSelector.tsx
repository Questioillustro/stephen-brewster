import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Box, Fade, Stack, Typography } from '@mui/material';
import { AnimationConstants } from '@/apps/cyoa/constants/AnimationConstants';
import { CarouselButton } from '@/apps/cyoa/components/carousel/CarouselButton';
import { CarouselItem } from '@/apps/cyoa/components/carousel/types';
import {
  CarouselContainer,
  CarouselTrack,
  CarouselWrapper,
} from '@/apps/cyoa/components/carousel/CarouselSelector.styles';

interface CarouselSelectorProps {
  items: CarouselItem[];
  title: string;
  itemWidth: number;
  defaultSelectedId?: string;
  onSelect: (item: CarouselItem) => void;
  renderItem: (item: CarouselItem, selected: boolean, onClick: () => void) => JSX.Element;
}

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
}) => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(
    defaultSelectedId || items[0]?.id || null,
  );
  const [scrollPosition, setScrollPosition] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isCentered, setIsCentered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);
  const totalItemsWidth = items.length * itemWidth;
  const maxScroll = Math.max(totalItemsWidth - containerWidth, 0);

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

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => updateDimensions());
    if (carouselRef.current) {
      resizeObserver.observe(carouselRef.current);
    }

    updateDimensions();

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      setTouchCurrentX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchCurrentX !== null) {
      const deltaX = touchStartX - touchCurrentX;
      const swipeThreshold = 50;

      if (Math.abs(deltaX) > swipeThreshold) {
        if (deltaX > 0) {
          scrollRight();
        } else {
          scrollLeft();
        }
      }
    }

    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  return (
    <Fade in={true} timeout={AnimationConstants.QUICK_STORY_NAV_SPEED}>
      <Stack>
        <Typography
          variant='h6'
          sx={{ pb: 2, justifyContent: 'center', width: '100%', display: 'flex' }}
        >
          {title}
        </Typography>

        <CarouselContainer>
          <CarouselButton
            direction={'left'}
            onClick={scrollLeft}
            disabled={scrollPosition <= 0 || isCentered}
          />

          <CarouselWrapper
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
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

          <CarouselButton
            direction={'right'}
            onClick={scrollRight}
            disabled={scrollPosition >= maxScroll || isCentered}
          />
        </CarouselContainer>
      </Stack>
    </Fade>
  );
};

export default CarouselSelector;
