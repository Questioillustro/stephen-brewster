import { Paper } from '@mui/material';

export const CAPaperPanel = ({ children, sx = {} }) => {
  return (
    <Paper elevation={1} sx={{ ...sx, p: 1 }}>
      {children}
    </Paper>
  );
};
