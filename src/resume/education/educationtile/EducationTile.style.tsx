import { css } from '@emotion/react';
import { Constants } from '../../../layout/Layout.constants';

export const EducationTileStyle = {
  root: css({
    width: '100%',
  }),
  card: css({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '7.5rem',
    padding: '.625rem 1.875rem',
    [Constants.MOBILE_MEDIA_QUERY]: {
      padding: '.3125rem .625rem',
    },
  }),
};
