import { styled } from '@mui/material';
import { Box } from '@mui/material';

export const StyledModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '800px',
  height: '80%',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(3),
  outline: 'none',
  pointerEvents: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.down('xs')]: {
    width: '90%',
  },
}));

export const StyledTextareaWrapper = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
});
