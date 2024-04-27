import { css } from '@emotion/react';
import { Constants } from '../../layout/Layout.constants';

export const EducationStyle = {
  root: css({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: '16px',
    [Constants.TABLET_MEDIA_QUERY]: {
      flexDirection: 'column',
      gap: '16px',
    },
  }),
};
