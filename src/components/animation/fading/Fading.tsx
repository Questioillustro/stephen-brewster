import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { ThemeConstants } from '../../../theme/Theme';
import { Fade } from '@mui/material';

export interface IFadingProps {
  child: ReactNode;
}

function Fading(props: IFadingProps) {
  const { fadeIn } = useContext(ThemeContext);

  return (
    <Fade in={fadeIn} timeout={ThemeConstants.FadeTransitionDuration}>
      <div>{props.child}</div>
    </Fade>
  );
}

export default Fading;
