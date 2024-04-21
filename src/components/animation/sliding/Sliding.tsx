import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { ThemeConstants } from '../../../theme/Theme';
import { Slide } from '@mui/material';

export interface ISlidingProps {
  child: ReactNode;
  direction: 'left' | 'right' | 'up' | 'down';
}

function Sliding(props: ISlidingProps) {
  const { slideIn } = useContext(ThemeContext);

  return (
    <Slide
      direction={props.direction}
      in={slideIn}
      timeout={ThemeConstants.SlideTransitionDuration}
    >
      <div>{props.child}</div>
    </Slide>
  );
}

export default Sliding;
