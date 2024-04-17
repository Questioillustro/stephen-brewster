import { css } from '@emotion/react';
import { Constants } from '../../layout/Layout.constants';

export const InterestsStyle = {
  root: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    [Constants.MOBILE_MEDIA_QUERY]: {},
  }),
};
