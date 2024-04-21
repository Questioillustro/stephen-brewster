import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { ThemeConstants } from '../../../theme/Theme';
import { Slide } from '@mui/material';

export interface ISlidingProps {
  child: ReactNode;
}

function Sliding(props: ISlidingProps) {
  const { fadeIn } = useContext(ThemeContext);

  return (
    <Slide direction={'left'} in={fadeIn} timeout={ThemeConstants.FadeTransitionDuration}>
      <div>{props.child}</div>
    </Slide>
  );
}

export default Sliding;
