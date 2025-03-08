/** @jsxImportSource @emotion/react */
import Typography from '@mui/material/Typography';
import React from 'react';
import QuoteCarousel from '@/apps/about/quotes/QuoteCarousel';
import { Box } from '@mui/material';
import { headerStyles } from './Header.styles';

function Header() {
  return (
    <Box css={headerStyles.container}>
      <Box css={headerStyles.titleContainer}>
        <Typography variant='h4' color='primary'>
          Stephen Brewster
        </Typography>

        <Typography variant='subtitle1' color='tertiary'>
          Human of Earth
        </Typography>
      </Box>

      <Box css={headerStyles.quoteContainer}>
        <QuoteCarousel />
      </Box>
    </Box>
  );
}

export default Header;
