import { Paper, Stack } from '@mui/material';
import Button from '@mui/material/Button';

export interface IPanelControlsProps {
  fe: boolean;
  toggleFe: () => void;
  lib: boolean;
  toggleLib: () => void;
}

export const PanelControls = (props: IPanelControlsProps) => {
  return (
    <Stack direction={'row'} sx={{ justifyContent: 'center', gap: 2 }}>
      <Button variant={props.fe ? 'contained' : 'outlined'} onClick={props.toggleFe}>
        Front End
      </Button>
      <Button variant={'outlined'}>Back End</Button>
      <Button variant={'outlined'}>Database</Button>
      <Button variant={props.lib ? 'contained' : 'outlined'} onClick={props.toggleLib}>
        Show Library
      </Button>
    </Stack>
  );
};
