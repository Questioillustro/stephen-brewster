/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import DarkThemeToggle from '../../theme/DarkThemeToggle';
import { ControlPanelStyle } from './ControlPanel.style';
import RandomTheme from '../../theme/RandomTheme';
import { Fade } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ThemeConstants } from '../../theme/Theme';

function ControlPanel() {
  const { fadeIn } = useContext(ThemeContext);

  return (
    <Fade in={fadeIn} timeout={ThemeConstants.FadeTransitionDuration}>
      <div css={ControlPanelStyle.root}>
        <div css={ControlPanelStyle.darkThemeToggle}>
          <DarkThemeToggle />
        </div>

        <div css={ControlPanelStyle.randomThemeToggle}>
          <RandomTheme />
        </div>
      </div>
    </Fade>
  );
}

export default ControlPanel;
