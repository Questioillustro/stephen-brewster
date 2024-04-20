/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { SkillsStyle } from './Skills.style';
import { useLanguagesHook } from './Skills.hook';
import SkillTile from './skilltile/SkillTile';

function Skills() {
  const skills = useLanguagesHook();

  return (
    <div css={SkillsStyle.root}>
      <div css={SkillsStyle.skillGrid}>
        {skills.map((s) => (
          <SkillTile name={s.name} key={s.name} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
