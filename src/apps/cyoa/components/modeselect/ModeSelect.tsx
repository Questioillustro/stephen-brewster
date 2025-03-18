import ChooseYourPathTile from './ChooseYourPathTile';
import { Paper } from '@mui/material';
import QuickAdventureTile from './QuickAdventureTile';

const ModeSelect = () => {
  return (
    <Paper variant={'elevation'} style={{ width: '100%' }}>
      <QuickAdventureTile />
      <ChooseYourPathTile />
    </Paper>
  );
};

export default ModeSelect;
