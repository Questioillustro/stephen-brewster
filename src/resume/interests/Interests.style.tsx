import { css } from '@emotion/react';
import { Constants } from '../../layout/Layout.constants';

export const InterestsStyle = {
  root: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    [Constants.MOBILE_MEDIA_QUERY]: {},
  }),
};
