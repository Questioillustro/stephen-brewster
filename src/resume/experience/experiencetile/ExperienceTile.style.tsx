import { css } from '@emotion/react';

export const ExperienceTileStyle = {
  root: css({ display: 'flex', flexDirection: 'row' }),
  companyInfo: css({
    padding: '10px',
    minWidth: '350px',
  }),
  descriptions: css({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'start',
    flexDirection: 'column',
  }),
};
