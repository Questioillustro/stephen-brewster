/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ReactNode, useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { Grow } from '@mui/material';
import { AnimationConstants } from '@/hooks/ThemeConductor.hook';

export interface IGrowingProps {
  child: ReactNode;
  callback?: () => void;
}

function Growing(props: IGrowingProps) {
  const { growIn } = useContext(ThemeContext);

  return (
    <Grow
      in={growIn}
      timeout={AnimationConstants.GrowTransitionDuration}
      addEndListener={props.callback}
    >
      <div>{props.child}</div>
    </Grow>
  );
}

export default Growing;
