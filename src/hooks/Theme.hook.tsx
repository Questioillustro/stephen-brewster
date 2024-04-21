﻿import { SetStateAction, useState } from 'react';
import { Theme } from '@mui/material';
import { ThemeBook } from '../theme/Theme';

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(ThemeBook.DarkMode);

  const [fadeIn, setFadeIn] = useState<boolean>(true);

  const [slideIn, setSlideIn] = useState<boolean>(true);

  return { theme, setTheme, fadeIn, setFadeIn, slideIn, setSlideIn };
}
