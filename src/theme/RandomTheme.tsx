﻿/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Casino } from '@mui/icons-material';
import { RandomThemeStyle } from './RandomTheme.style';
import Typography from '@mui/material/Typography';

function RandomTheme() {
  const themeContext = useContext(ThemeContext);

  const handleGenerate = () => {
    themeContext.AnimatedRandomTheme();
  };

  return (
    <div onClick={handleGenerate} css={RandomThemeStyle.root}>
      <Casino color={'primary'} />

      <Typography color={'secondary'} variant={'body1'}>
        Randomize Theme
      </Typography>
    </div>
  );
}

export default RandomTheme;
