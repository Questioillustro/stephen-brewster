import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { Fade } from '@mui/material';
import { ThemeConstants } from '../../../hooks/AnimationConductor.hook';

export interface IFadingProps {
  child: ReactNode;
  callback?: () => void;
}

function Fading(props: IFadingProps) {
  const { fadeIn } = useContext(ThemeContext);

  return (
    <Fade
      in={fadeIn}
      timeout={ThemeConstants.FadeTransitionDuration}
      addEndListener={props.callback}
    >
      <div>{props.child}</div>
    </Fade>
  );
}

export default Fading;
