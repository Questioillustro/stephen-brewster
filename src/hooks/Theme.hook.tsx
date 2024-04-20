﻿import { useState } from 'react';
import { Theme } from '@mui/material';
import { ThemeBook } from '../theme/Theme';

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(ThemeBook.DarkMode);

  return { theme, setTheme };
}
