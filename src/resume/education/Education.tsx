/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useEducationHook } from './Education.hook';
import EducationTile from './educationtile/EducationTile';
import { EducationStyle } from './Education.style';

function Education() {
  const educations = useEducationHook();

  return (
    <div css={EducationStyle.root}>
      {educations.map((e) => (
        <EducationTile education={e} key={e.school} />
      ))}
    </div>
  );
}

export default Education;
