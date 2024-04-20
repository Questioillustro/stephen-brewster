/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ExperienceStyle } from './Experience.style';
import { useExperienceHook } from './Experience.hook';
import ExperienceTile from './experiencetile/ExperienceTile';

function Experience() {
  const experiences = useExperienceHook();

  return (
    <div css={ExperienceStyle.root}>
      {experiences.map((e) => (
        <ExperienceTile experience={e} key={e.company} />
      ))}
    </div>
  );
}

export default Experience;
