import { css } from '@mui/material';

export const LayoutStyle = {
  root: css({
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
  header: css({
    height: '10vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
  navButtons: css({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }),
  content: css({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '0',
    minHeight: '90vh',
  }),
};
