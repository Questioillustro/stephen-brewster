/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { AccordionDetails, Paper } from '@mui/material';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { useState } from 'react';
import { SBAccordionStyle } from './SBAccordion.style';

export interface IResumeSectionProps {
  title: string;
  subtitle: string;
  content: string;
}

function SBAccordion(props: IResumeSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const handleChange = () => () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange()}>
      <AccordionSummary expandIcon={<ArrowDropUpOutlinedIcon />}>
        <div css={SBAccordionStyle.summary}>
          <div css={SBAccordionStyle.title}>
            <Typography variant={'h5'} color={'primary'}>
              {props.title}
            </Typography>
          </div>

          <div css={SBAccordionStyle.subtitle}>
            <Typography variant={'body2'}>{props.subtitle}</Typography>
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails>
        <Typography>{props.content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default SBAccordion;
