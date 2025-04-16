import React, { useState, useRef } from 'react';
import StoryTile from './StoryTile';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useStoryContext } from '@/apps/cyoa/context/StoryContext';

const StoryCarousel = () => {
  const { allStories, setStory, selectedStory } = useStoryContext();

  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const scrollAmount = containerWidth * 0.8; // Scroll 80% of container width
    let newPosition;

    if (direction === 'left') {
      newPosition = Math.max(scrollPosition - scrollAmount, 0);
    } else {
      newPosition = Math.min(
        scrollPosition + scrollAmount,
        containerRef.current.scrollWidth - containerWidth,
      );
    }

    containerRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
    setScrollPosition(newPosition);
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight =
    containerRef.current &&
    scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%', // Ensure it doesn't exceed parent width
        overflow: 'hidden', // Prevent content from spilling out
        boxSizing: 'border-box', // Include padding in width calculations
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          width: '100%',
        }}
      >
        {(allStories || []).map((s, idx) => (
          <Box
            key={s._id}
            sx={{
              flex: '0 0 auto',
              minWidth: { xs: '125px', sm: '150px', md: '175px' }, // Reduced by 50%
              maxWidth: { xs: '125px', sm: '150px', md: '175px' }, // Ensure consistent sizing
              cursor: 'pointer',
              transformOrigin: 'top left', // Anchor scaling to top-left
              '& > *': {
                width: '100%',
                height: '100%',
              },
              p: 2,
            }}
            onClick={() => setStory(s)}
          >
            <StoryTile story={s} selected={(selectedStory?._id ?? '-1') === s._id} />
          </Box>
        ))}
      </Box>

      {/* Left Arrow */}
      <IconButton
        onClick={() => handleScroll('left')}
        disabled={!canScrollLeft}
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,1)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0,0,0,1)' },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={() => handleScroll('right')}
        disabled={!canScrollRight}
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,1)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0,0,0,1)' },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default StoryCarousel;
