import { Paper } from '@mui/material';

export interface ISBPopoverTextFieldProps {
  text: string;
}

function SBPopoverTextField(props: ISBPopoverTextFieldProps) {
  const { text } = props;
  return (
    <Paper elevation={5} sx={{ p: 2 }}>
      {text}
    </Paper>
  );
}

export default SBPopoverTextField;
