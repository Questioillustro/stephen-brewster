import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { AccordionDetails, Paper } from '@mui/material';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { useState } from 'react';

export interface IResumeSectionProps {
  title: string;
  subtitle: string;
  content: string;
}

function ResumeSection(props: IResumeSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const handleChange = () => () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange()}>
      <AccordionSummary
        expandIcon={<ArrowDropUpOutlinedIcon />}
        aria-controls='panel1bh-content'
        id='panel1bh-header'
      >
        <Typography variant={'h5'} color={'primary'}>
          {props.title}
        </Typography>
        <Typography variant={'body1'}>{props.subtitle}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography>{props.content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default ResumeSection;
