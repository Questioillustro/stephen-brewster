import { Popover } from '@mui/material';
import React, { ReactNode, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface ISBPopoverProps {
  element: ReactNode;
  content: ReactNode;
  id?: string;
}

function SBPopover(props: ISBPopoverProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const { element, id, content } = props;

  const elementId = useMemo(() => {
    return id ? id : uuidv4();
  }, [id]);

  return (
    <div>
      <div
        aria-owns={open ? elementId : undefined}
        aria-haspopup={'true'}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {element}
      </div>

      <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        id={elementId}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        disableRestoreFocus
        disableScrollLock
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        {content}
      </Popover>
    </div>
  );
}

export default SBPopover;
