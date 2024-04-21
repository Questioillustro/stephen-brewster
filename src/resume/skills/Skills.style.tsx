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
    gap: '10px',
    flexWrap: 'wrap',
  }),
  pieChart: css({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    padding: '20px',
  }),
};
