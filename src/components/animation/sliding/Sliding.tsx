import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { Slide } from '@mui/material';
import { AnimationConstants } from '../../../hooks/ThemeConductor.hook';

export interface ISlidingProps {
  child: ReactNode;
  direction: 'left' | 'right' | 'up' | 'down';
  callback?: () => void;
}

function Sliding(props: ISlidingProps) {
  const { slideIn } = useContext(ThemeContext);

  return (
    <Slide
      direction={props.direction}
      in={slideIn}
      timeout={AnimationConstants.SlideTransitionDuration}
      addEndListener={props.callback}
    >
      <div>{props.child}</div>
    </Slide>
  );
}

export default Sliding;
