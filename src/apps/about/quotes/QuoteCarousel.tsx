import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Fade } from '@mui/material';
import { IQuote, allquotes } from '@/apps/about/quotes/Quotes.hook';

const FADE_DURATION = 1000;

const QuoteCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      if (currentIndex < allquotes.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
      setFade(true);
    }, FADE_DURATION);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            minHeight: '9.375rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {allquotes.map((quote: IQuote, index: number) => (
            <Fade key={index} in={index === currentIndex && fade} timeout={FADE_DURATION}>
              <Paper
                elevation={3}
                sx={{
                  minWidth: '18.75rem',
                  padding: '1.25rem',
                  textAlign: 'center',
                  borderRadius: '10px',
                  position: 'absolute',
                  visibility: index === currentIndex ? 'visible' : 'hidden',
                  pointerEvents: index === currentIndex ? 'auto' : 'none',
                }}
              >
                <Typography variant='body1' sx={{ fontStyle: 'italic', mb: 1 }}>
                  "{quote.text}"
                </Typography>
                <Typography variant='caption' color='textSecondary'>
                  — {quote.author}
                </Typography>
              </Paper>
            </Fade>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default QuoteCarousel;
