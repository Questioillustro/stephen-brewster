import { css } from '@mui/material';

export const LayoutStyle = {
  root: css({
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
  header: css({
    minHeight: '10vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
  navButtons: css({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }),
  contentWrapper: css({
    width: '100%',
    display: 'flex',
    padding: '0px',
    justifyContent: 'center',
  }),
  content: css({
    minHeight: '90vh',
    width: '100%',
    display: 'flex',
    padding: '20px',
    justifyContent: 'center',
  }),
};
