import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
    background-color: #1a1a1a;
  `}
`;

export const Tile = styled.div`
  ${({ theme }) => css`
    border: 1px solid #404040;
    border-radius: 4px;
    padding: 15px;
    cursor: pointer;
    background-color: #2d2d2d;
    color: #e0e0e0;
    transition: transform 0.2s;
    text-align: center;

    h3 {
      margin: 0;
    }

    &:hover {
      transform: scale(1.05);
    }
  `}
`;

export const BackButton = styled.button`
  ${({ theme }) => css`
    margin-bottom: 20px;
    padding: 8px 16px;
    background-color: #404040;
    color: #e0e0e0;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #505050;
    }
  `}
`;
