/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Casino } from '@mui/icons-material';
import { RandomThemeStyle } from './RandomTheme.style';
import Typography from '@mui/material/Typography';
import { GetRandomTheme } from '../util/RandomGenerator.util';
import { ThemeConstants } from './Theme';

function RandomTheme() {
  const { theme, setTheme, fadeIn, setFadeIn, slideIn, setSlideIn } = useContext(ThemeContext);

  const handleGenerate = () => {
    setFadeIn(false);
    setSlideIn(false);

    setTimeout(() => {
      const rando = GetRandomTheme();
      setTheme(rando);
    }, ThemeConstants.FadeTransitionDuration + 100);
  };

  useEffect(() => {
    if (!fadeIn) setFadeIn(true);
    if (!slideIn) setSlideIn(true);
  }, [theme]);

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
