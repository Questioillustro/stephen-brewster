import React from 'react';
import { styled } from '@mui/material/styles';
import { Breadcrumbs, Link, Typography, Paper, Box, BreadcrumbsProps } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { grey } from '@mui/material/colors';

// Define interfaces for breadcrumb items and props
interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: (event: React.MouseEvent) => void;
}

interface CustomBreadcrumbsProps extends Omit<BreadcrumbsProps, 'children'> {
  items: BreadcrumbItem[];
  maxItems?: number;
  showLastAsText?: boolean;
}

// Styled container component
const BreadcrumbContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  backgroundColor: grey[100],
  borderRadius: theme.shape.borderRadius,
  display: 'inline-flex',
  alignItems: 'center',
}));

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({
  items,
  maxItems = 8,
  showLastAsText = true,
  ...breadcrumbsProps
}) => {
  const renderBreadcrumbItem = (item: BreadcrumbItem, isLast: boolean) => {
    if (isLast && showLastAsText) {
      return (
        <Typography color='text.primary' sx={{ fontWeight: 'medium' }} key={item.label}>
          {item.label}
        </Typography>
      );
    }

    return (
      <Link
        underline='hover'
        color='inherit'
        href={item.href}
        onClick={item.onClick}
        key={item.label}
        sx={{
          '&:hover': {
            color: 'primary.main',
          },
        }}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <BreadcrumbContainer elevation={1}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
        maxItems={maxItems}
        itemsBeforeCollapse={1}
        itemsAfterCollapse={1}
        {...breadcrumbsProps}
      >
        {items.map((item, index) => renderBreadcrumbItem(item, index === items.length - 1))}
      </Breadcrumbs>
    </BreadcrumbContainer>
  );
};

export default CustomBreadcrumbs;
