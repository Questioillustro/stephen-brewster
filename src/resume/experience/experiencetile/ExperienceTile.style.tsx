import { css } from '@emotion/react';
import { Constants } from '../../../layout/Layout.constants';

export const ExperienceTileStyle = {
  root: css({
    display: 'flex',
    flexDirection: 'row',
    [Constants.TABLET_MEDIA_QUERY]: {
      flexDirection: 'column',
    },
  }),
  companyInfo: css({
    padding: '10px',
    minWidth: '320px',
  }),
  roleInfo: css({
    marginTop: '10px',
  }),
  descriptions: css({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  }),
};
