import { css } from '@emotion/react';

export const SkillsStyle = {
  root: css({
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  }),
  skillGrid: css({
    display: 'flex',
    gap: '.625rem',
    flexWrap: 'wrap',
  }),
  pieChart: css({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    minHeight: '21.875rem',
  }),
};
