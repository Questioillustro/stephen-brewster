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
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  }),
  navButtons: css({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }),
  content: css({
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '1vh',
    minHeight: '80vh',
  }),
  footer: css({
    height: '10vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  }),
};
