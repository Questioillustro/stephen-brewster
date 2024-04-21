import { css } from '@emotion/react';
import { ThemeConstants } from '../../hooks/AnimationConductor.hook';
import { Constants } from '../../layout/Layout.constants';

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
    minHeight: '350px',
    [Constants.MID_MEDIA_QUERY]: {
      minHeight: '300px',
    },
  }),
  controlPanel: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
  }),
};
