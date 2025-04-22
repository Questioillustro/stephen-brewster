import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const CarouselContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
`;

export const CarouselWrapper = styled(Box)`
  overflow: hidden;
  flex: 1;
  max-width: 100%;
`;

export const CarouselTrack = styled(Box)<{ isCentered: boolean }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  gap: 16px;
  justify-content: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
  width: ${({ isCentered }) => (isCentered ? 'auto' : '100%')};
`;
