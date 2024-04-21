/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { SkillsStyle } from './Skills.style';
import { useSkillsHook } from './Skills.hook';
import SkillTile from './skilltile/SkillTile';
import SkillTypeChart from './charts/SkillTypeChart';

function Skills() {
  const skills = useSkillsHook();

  return (
    <div css={SkillsStyle.root}>
      <div css={SkillsStyle.skillGrid}>
        {skills.map((s) => (
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
