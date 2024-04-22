/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import DarkThemeToggle from '../../theme/DarkThemeToggle';
import { ControlPanelStyle } from './ControlPanel.style';
import RandomTheme from '../../theme/RandomTheme';

function ControlPanel() {
  return (
    <div css={ControlPanelStyle.root}>
      <div css={ControlPanelStyle.darkThemeToggle}>
        <DarkThemeToggle />
      </div>

      <div css={ControlPanelStyle.randomThemeToggle}>
        <RandomTheme />
      </div>
    </div>
  );
}

export default ControlPanel;
