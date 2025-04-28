import { Stack } from '@mui/material';
import PillDisplay from '@/apps/codeassistant/codelibrary/libraryitemcard/PillDisplay';

export interface ITechStackDisplayProps {
  framework: string | undefined;
  uiLibrary: string | undefined;
}

export const TechStackDisplay = (props: ITechStackDisplayProps) => {
  return (
    <Stack direction={'row'} sx={{ gap: 1 }}>
      {props.framework && <PillDisplay label={props.framework} color={'primary'} />}
      {props.uiLibrary && <PillDisplay label={props.uiLibrary} color={'primary'} />}
    </Stack>
  );
};
