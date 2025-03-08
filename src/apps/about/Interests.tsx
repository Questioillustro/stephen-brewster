/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useInterestsHook } from './Interests.hook';
import InterestTile from './interesttile/InterestTile';
import { InterestsStyle } from './Interests.style';

function Interests() {
  const interests = useInterestsHook();

  return (
    <div css={InterestsStyle.root}>
      {interests.map((i) => (
        <InterestTile interest={i} key={i.name} />
      ))}
    </div>
  );
}

export default Interests;
