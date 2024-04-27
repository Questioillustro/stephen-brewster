import { Link } from '@mui/material';
import { ReactNode, useMemo } from 'react';
import SBPopover from '../popover/SBPopover';

export interface ISBLinkProps {
  variant?:
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline'
    | 'inherit'
    | undefined;
  href: string;
  linkContent: ReactNode;
  popoverContent?: ReactNode;
  internal?: boolean;
  ariaLabel?: string;
}

function SBLink(props: ISBLinkProps) {
  const { variant, href, linkContent, internal, ariaLabel, popoverContent } = props;

  const sbLink = useMemo(() => {
    return (
      <Link
        color={'link'}
        variant={variant}
        href={href}
        target={internal ? '_self' : '_blank'}
        underline={'hover'}
      >
        {linkContent}
      </Link>
    );
  }, [linkContent, href, variant, internal, ariaLabel]);

  const link = useMemo(() => {
    if (popoverContent) {
      return <SBPopover element={sbLink} content={popoverContent} id={href} />;
    } else {
      return sbLink;
    }
  }, [popoverContent]);

  return <>{link}</>;
}

export default SBLink;
