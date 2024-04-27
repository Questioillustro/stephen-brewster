/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '@mui/material/Typography';
import { BoulderingStyle } from './Bouldering.style';
import SBLink from '../../../components/link/SBLink';

function Bouldering() {
  return (
    <div css={BoulderingStyle.root}>
      <Typography variant={'body2'}>Currently Projecting: V5</Typography>

      <Typography variant={'body2'}>First Session: 7/10/2023</Typography>

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
