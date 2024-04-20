import { DarkTheme } from '../theme/Theme';
import { useState } from 'react';
import { Theme } from '@mui/material';

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(DarkTheme);

  return { theme, setTheme };
}
