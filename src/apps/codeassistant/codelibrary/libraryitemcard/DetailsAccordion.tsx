import { Stack, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ICodeGenSaveRequest } from '@/apps/codeassistant/codegen/CodeGen.types';

export interface IDetailsAccordionProps {
  request: ICodeGenSaveRequest;
}

export const DetailsAccordion = (props: IDetailsAccordionProps) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon color={'primary'} />}>
        <Stack direction={'row'} sx={{ justifyContent: 'center', alignItem: 'center', gap: 2 }}>
          <Typography variant='body1' color={'primary'}>
            Details
          </Typography>
        </Stack>
      </AccordionSummary>

      <AccordionDetails>
        <Stack>
          <Typography variant={'body1'} color={'primary'}>
            Special Requests
          </Typography>

          {(props.request.specialRequests ?? []).map((req, index) => (
            <Typography key={index} variant={'body2'}>
              {req}
            </Typography>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
