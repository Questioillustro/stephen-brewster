/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { AccordionDetails, Paper } from '@mui/material';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { ReactNode, useState } from 'react';
import { SBAccordionStyle } from './SBAccordion.style';

export interface IResumeSectionProps {
  title: string;
  content: ReactNode;
}

function SBAccordion(props: IResumeSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const handleChange = () => () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange()} square css={SBAccordionStyle.root}>
      <AccordionSummary expandIcon={<ArrowDropUpOutlinedIcon />}>
        <div css={SBAccordionStyle.title}>
          <Typography variant={'h5'} color={'primary'}>
            {props.title}
          </Typography>
        </div>
      </AccordionSummary>

      <AccordionDetails css={SBAccordionStyle.details}>
        <Paper elevation={1} square>
          {props.content}
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
}

export default SBAccordion;
