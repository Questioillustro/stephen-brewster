/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useInterestsHook } from './Interests.hook';
import InterestTile from './interesttile/InterestTile';
import { InterestsStyle } from './Interests.style';
import Masonry from '@mui/lab/Masonry';

function Interests() {
  const interests = useInterestsHook();

  return (
    <div css={InterestsStyle.root}>
      {interests.map((i) => (
        <InterestTile interest={i} />
      ))}
    </div>
  );
}

export default Interests;
