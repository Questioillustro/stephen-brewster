import { css } from '@emotion/react';
import { Constants } from '../../layout/Layout.constants';

export const EducationStyle = {
  root: css({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    [Constants.TABLET_MEDIA_QUERY]: {
      flexDirection: 'column',
      gap: '10px',
    },
  }),
};
