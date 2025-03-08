/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const headerStyles = {
  container: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    @media (max-width: 48rem) {
      flex-direction: column;
      padding: 1.25rem;
      width: 90%;
    }
  `,

  titleContainer: css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2.25rem;
    align-items: center;
    text-align: center;

    @media (max-width: 48rem) {
      width: 100%;
    }
  `,
};
