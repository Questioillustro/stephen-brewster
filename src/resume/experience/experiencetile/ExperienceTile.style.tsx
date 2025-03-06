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
    padding: '.625rem',
    minWidth: '21.875rem',
  }),
  titleWrapper: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '.625rem',
  }),
  roleInfo: css({
    marginTop: '.625rem',
  }),
  descriptions: css({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  }),
};
