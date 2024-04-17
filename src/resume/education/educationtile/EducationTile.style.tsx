import { css } from '@emotion/react';
import { Constants } from '../../../layout/Layout.constants';

export const EducationTileStyle = {
  root: css({}),
  card: css({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '120px',
    minWidth: '300px',
    padding: '10px 30px',
    [Constants.MOBILE_MEDIA_QUERY]: {
      padding: '5px 10px',
    },
  }),
};
