import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

export interface ISBPopoverTextFieldProps {
  text: string;
}

function SBPopoverTextField(props: ISBPopoverTextFieldProps) {
  const { text } = props;
  return (
    <Paper elevation={5} sx={{ p: 2 }} square>
      <Typography variant={'body1'}>{text}</Typography>
    </Paper>
  );
}

export default SBPopoverTextField;
