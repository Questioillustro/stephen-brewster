import { css } from '@mui/material';
import { Constants } from './Layout.constants';

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
  contentWrapper: css({
    width: '100%',
    display: 'flex',
    padding: '0',
    justifyContent: 'center',
  }),
  content: css({
    minHeight: '90vh',
    width: '80%',
    [Constants.MID_MEDIA_QUERY]: {
      width: '95%',
      padding: '1.25rem 0',
    },
    display: 'flex',
    padding: '1.25rem',
    justifyContent: 'center',
  }),
  controlPanel: css({
    display: 'flex',
    justifyContent: 'space-evenly',
  }),
};
