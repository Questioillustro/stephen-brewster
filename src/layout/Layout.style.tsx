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
  content: css({
    maxWidth: '40vw',
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
