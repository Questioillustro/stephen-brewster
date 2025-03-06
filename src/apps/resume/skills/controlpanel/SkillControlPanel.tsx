/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import FilterSkills from './FilterSkills';
import { SkillControlPanelStyle } from './SkillControlPanel.style';

function SkillControlPanel() {
  return (
    <div css={SkillControlPanelStyle.root}>
      <FilterSkills />
    </div>
  );
}

export default SkillControlPanel;
