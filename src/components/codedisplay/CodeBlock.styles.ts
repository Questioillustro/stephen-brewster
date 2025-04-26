import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

export const CodeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: grey[900],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  overflow: 'auto',
  margin: theme.spacing(1, 0),
  position: 'relative',
}));

export const CopyButtonContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
}));
