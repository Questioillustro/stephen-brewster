import { css } from '@emotion/react';
import { Constants } from '../../layout/Layout.constants';

export const CodeStyle = {
  root: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: '10px',
    [Constants.MID_MEDIA_QUERY]: {
      flexDirection: 'column',
    },
  }),
  codeLink: css({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  }),
  linkTile: css({
    display: 'flex',
    justifyContent: 'center',
  }),
};
