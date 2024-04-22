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
    padding: '0px',
    justifyContent: 'center',
  }),
  content: css({
    minHeight: '90vh',
    width: '80%',
    [Constants.MID_MEDIA_QUERY]: {
      width: '100%',
      padding: '20px 0px',
    },
    display: 'flex',
    padding: '20px',
    justifyContent: 'center',
  }),
  controlPanel: css({
    display: 'flex',
    justifyContent: 'space-evenly',
  }),
};
