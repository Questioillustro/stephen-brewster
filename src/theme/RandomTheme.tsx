/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ThemeBook } from './Theme';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Casino } from '@mui/icons-material';
import { RandomThemeStyle } from './RandomTheme.style';

function RandomTheme() {
  const { setTheme } = useContext(ThemeContext);

  const handleGenerate = () => {
    const rando = ThemeBook.GetRandom();
    setTheme(rando);
  };

  return (
    <div onClick={handleGenerate} css={RandomThemeStyle.root}>
      <Casino />
      Randomize Theme
    </div>
  );
}

export default RandomTheme;
