import { Link } from '@mui/material';

export interface ISBLinkProps {
  variant:
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
  text: string;
  internal?: boolean;
}

function SBLink(props: ISBLinkProps) {
  const { variant, href, text, internal } = props;
  return (
    <Link
      color={'link'}
      variant={variant}
      href={href}
      target={internal ? '_self' : '_blank'}
      underline={'hover'}
    >
      {text}
    </Link>
  );
}

export default SBLink;
