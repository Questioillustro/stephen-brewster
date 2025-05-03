import { ButtonGroup, Stack } from '@mui/material';
import Button from '@mui/material/Button';

export const CodeAssistantViewControl = () => {
  return (
    <Stack>
      <ButtonGroup>
        <Button>Code Gen</Button>
        <Button>Library</Button>
      </ButtonGroup>
    </Stack>
  );
};
