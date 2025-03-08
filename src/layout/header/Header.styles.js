/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const headerStyles = {
  container: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${(theme) => theme.palette.background.paper};

    @media (max-width: 48rem) {
      flex-direction: column;
      padding: 1.25rem;
      min-height: auto;
      width: 90%;
    }
  `,

  titleContainer: css`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 48rem) {
      width: 100%;
    }
  `,
};
