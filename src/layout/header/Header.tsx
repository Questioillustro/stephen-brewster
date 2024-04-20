/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { HeaderStyle } from './Header.style';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Fade } from '@mui/material';
import { ThemeConstants } from '../../theme/Theme';

function Header() {
  const { fadeIn } = useContext(ThemeContext);

  return (
    <Fade in={fadeIn} timeout={ThemeConstants.FadeTransitionDuration}>
      <div css={HeaderStyle.root}>
        <Typography variant={'h4'} color={'primary'}>
          Stephen Brewster
        </Typography>
        <Typography variant={'subtitle1'} color={'tertiary'}>
          Software Engineer
        </Typography>
      </div>
    </Fade>
  );
}

export default Header;
