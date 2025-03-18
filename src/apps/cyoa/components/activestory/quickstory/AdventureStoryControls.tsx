import { Button } from '@mui/material';
import { Replay } from '@mui/icons-material';

export interface AdventureStoryControlsProps {}
const AdventureStoryControls = () => {
  return <Button startIcon={<Replay />}>Start Over</Button>;
};

export default AdventureStoryControls;
