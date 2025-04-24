import React, { ReactNode, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface ICollapsibleAccordionProps {
  title: string;
  titleContent: ReactNode;
  content: ReactNode;
}

const CollapsibleAccordion = (props: ICollapsibleAccordionProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange()}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack direction={'row'} sx={{ gap: 2 }}>
          <Typography style={{ flexGrow: 1 }}>{props.title}</Typography>

          {props.titleContent}
        </Stack>
      </AccordionSummary>
      <AccordionDetails>{props.content}</AccordionDetails>
    </Accordion>
  );
};

export default CollapsibleAccordion;
