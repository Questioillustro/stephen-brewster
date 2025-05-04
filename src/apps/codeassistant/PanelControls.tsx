import { Paper, Stack } from '@mui/material';
import Button from '@mui/material/Button';

export interface IPanelControlsProps {
  genSettings: boolean;
  toggleSettings: () => void;
  lib: boolean;
  toggleLib: () => void;
}

export const PanelControls = (props: IPanelControlsProps) => {
  return (
    <Stack direction={'row'} sx={{ justifyContent: 'center', gap: 2 }}>
      <Button variant={props.genSettings ? 'contained' : 'outlined'} onClick={props.toggleSettings}>
        Settings
      </Button>
      <Button variant={props.lib ? 'contained' : 'outlined'} onClick={props.toggleLib}>
        Library
      </Button>
    </Stack>
  );
};
