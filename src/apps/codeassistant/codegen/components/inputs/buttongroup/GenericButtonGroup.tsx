import React, { useEffect, useState, useRef } from 'react';
import { ButtonGroup, Button, Stack, IconButton } from '@mui/material';
import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { ComponentTitle } from '@/apps/codeassistant/codegen/components/ComponentTitle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StyledButtonGroup = styled(ButtonGroup)(
  () => css`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding-bottom: 8px;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    .MuiButton-root {
      text-transform: none;
      font-weight: 500;
      padding: 8px 16px;
      border: 1px solid #e0e0e0;
      flex-shrink: 0;
      &:hover {
        background-color: #f5f5f5;
      }
      &.Mui-selected {
        background-color: #1976d2;
        color: #ffffff;
        &:hover {
          background-color: #1565c0;
        }
      }
    }
  `,
);

const CarouselContainer = styled(Stack)(
  () => css`
    position: relative;
    width: 100%;
  `,
);

interface IGenericButtonGroupProps {
  labels: string[] | undefined;
  label: string;
  selected?: string;
  onSelect: (selected: string) => void;
}

const GenericButtonGroup: React.FC<IGenericButtonGroupProps> = (
  props: IGenericButtonGroupProps,
) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const handleClick = (value: string) => {
    props.onSelect(value);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const updateArrows = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    updateArrows();
    const handleResize = () => updateArrows();
    window.addEventListener('resize', handleResize);
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', updateArrows);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentRef) {
        currentRef.removeEventListener('scroll', updateArrows);
      }
    };
  }, [props.labels]);

  return (
    <Stack direction='column' sx={{ p: 2 }}>
      <ComponentTitle title={props.label} />
      <CarouselContainer direction='row' alignItems='center' spacing={1}>
        {showLeftArrow && (
          <IconButton onClick={scrollLeft} sx={{ position: 'absolute', left: 0, zIndex: 1 }}>
            <ArrowBackIosIcon />
          </IconButton>
        )}
        <StyledButtonGroup ref={scrollRef} aria-label='selection'>
          {(props.labels ?? []).map((value) => (
            <Button
              key={value}
              onClick={() => handleClick(value)}
              className={props.selected === value ? 'Mui-selected' : ''}
              sx={{ fontSize: { xs: '8px', sm: '10px', md: '16px' } }}
            >
              {value}
            </Button>
          ))}
        </StyledButtonGroup>
        {showRightArrow && (
          <IconButton onClick={scrollRight} sx={{ position: 'absolute', right: 0, zIndex: 1 }}>
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </CarouselContainer>
    </Stack>
  );
};

export default GenericButtonGroup;
