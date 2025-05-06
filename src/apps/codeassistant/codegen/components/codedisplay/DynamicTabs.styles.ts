import styled from '@emotion/styled';
import { Tabs } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const StyledDynamicTabs = styled(Tabs)(({ theme }: { theme: Theme }) => ({
  '& .MuiTab-root': {
    minWidth: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    fontWeight: 500,
    textTransform: 'none',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease',
    '&.Mui-selected': {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
  },
  '& .MuiTabs-indicator': {
    height: 3,
    backgroundColor: theme.palette.primary.main,
  },
}));
