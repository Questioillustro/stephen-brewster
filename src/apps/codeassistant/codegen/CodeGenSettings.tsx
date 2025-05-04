import { Stack } from '@mui/material';
import FrontEndComponent from '@/apps/codeassistant/codegen/FrontEndComponent';
import { PromptInputs } from '@/apps/codeassistant/codegen/PromptInputs';

export const CodeGenSettings = () => {
  return (
    <Stack sx={{ gap: 2 }}>
      <FrontEndComponent />
      <PromptInputs />
    </Stack>
  );
};
