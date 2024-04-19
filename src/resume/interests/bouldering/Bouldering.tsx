/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '@mui/material/Typography';
import { BoulderingStyle } from './Bouldering.style';
import { Link } from '@mui/material';

function Bouldering() {
  return (
    <div css={BoulderingStyle.root}>
      <Typography variant={'body2'}>Currently Projecting: V5</Typography>

      <Typography variant={'body2'}>First Session: 7/10/2023</Typography>

      <div css={BoulderingStyle.myGyms}>
        <Typography variant={'body1'}>My Gyms: </Typography>
        <Link href={'https://centralrockgym.com/rochester/'} underline={'none'} target={'_blank'}>
          Central Rock Gym
        </Link>
        |
        <Link
          href={'https://www.rit.edu/fitnessrecreation/red-barn-climbing'}
          underline={'none'}
          target={'_blank'}
        >
          Red Barn
        </Link>
      </div>
    </div>
  );
}

export default Bouldering;
