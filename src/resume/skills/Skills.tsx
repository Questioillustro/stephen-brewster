/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { SkillsStyle } from './Skills.style';
import SkillTile from './skilltile/SkillTile';
import SkillTypeChart from './charts/SkillTypeChart';
import { useContext } from 'react';
import { SkillsContext } from './context/SkillsContext';

function Skills() {
  const { getActiveSkills } = useContext(SkillsContext);

  return (
    <div css={SkillsStyle.root}>
      <div css={SkillsStyle.skillGrid}>
        {getActiveSkills().map((s) => (
          <SkillTile name={s.name} key={s.name} />
        ))}
      </div>

      <div css={SkillsStyle.pieChart}>
        <SkillTypeChart />
      </div>
    </div>
  );
}

export default Skills;
