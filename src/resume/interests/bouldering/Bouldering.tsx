/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '@mui/material/Typography';
import { BoulderingStyle } from './Bouldering.style';
import SBLink from '../../../components/link/SBLink';

function Bouldering() {
  return (
    <div css={BoulderingStyle.root}>
      <Typography variant={'body2'}>
          I immediately fell in love with the sport of bouldering after my first session in July of 2023 and try to get
          out at least two or three times per week. It is a sport that works the mind and body like nothing else I have 
          attempted before. The feeling of looking at a route, attempting it, finding it 'impossible', and then ultimately
          sending it is one of the most rewarding experiences I have found in athletics.
      </Typography>

      <div css={BoulderingStyle.myGyms}>
        <SBLink
          href={'https://centralrockgym.com/rochester/'}
          linkContent={'Central Rock Gym'}
          variant={'body2'}
        />
        |
        <SBLink
          href={'https://www.rit.edu/fitnessrecreation/red-barn-climbing'}
          linkContent={'Red Barn'}
          variant={'body2'}
        />
      </div>
    </div>
  );
}

export default Bouldering;
