import { ReactNode, useContext } from 'react';
import { Fade } from '@mui/material';
import { AnimationConstants } from '../../../hooks/AnimationConductor.hook';
import { ThemeContext } from '../../../contexts/ThemeContext';

export interface IFadingProps {
  child: ReactNode;
  callback?: () => void;
}

function Fading(props: IFadingProps) {
  const { fadeIn } = useContext(ThemeContext);

  return (
    <Fade
      in={fadeIn}
      timeout={AnimationConstants.FadeTransitionDuration}
      addEndListener={props.callback}
    >
      <div>{props.child}</div>
    </Fade>
  );
}

export default Fading;
