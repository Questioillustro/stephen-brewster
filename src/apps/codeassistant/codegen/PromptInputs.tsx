import { Paper, Stack } from '@mui/material';
import { SpecialRequests } from '@/apps/codeassistant/codegen/components/inputs/specialrequests/SpecialRequests';
import CodeExampleInput from '@/apps/codeassistant/codegen/components/inputs/codeexample/CodeExampleInput';
import LlmSelect from '@/apps/codeassistant/codegen/components/inputs/llmselect/LlmSelect';
import PromptField from '@/apps/codeassistant/codegen/components/PromptField';
import SendPromptButton from '@/apps/codeassistant/codegen/components/inputs/SendPromptButton';
import PromptDisplay from '@/apps/codeassistant/codegen/components/PromptDisplay';

export const PromptInputs = () => {
  return (
    <Stack sx={{ flexDirection: { sm: 'column', lg: 'row' }, gap: 2, width: '100%' }}>
      <Stack sx={{ gap: 2, width: '100%' }}>
        <Paper elevation={2} sx={{ p: 2 }}>
          <SpecialRequests />
        </Paper>

        <Paper elevation={2}>
          <CodeExampleInput />
        </Paper>
      </Stack>

      <Paper elevation={2} sx={{ width: '100%' }}>
        <Stack direction={'column'} sx={{ gap: 2, p: 2 }}>
          <LlmSelect />

          <Stack direction={'row'} sx={{ gap: 2, pt: 1 }}>
            <PromptField />
            <SendPromptButton />
          </Stack>

          <PromptDisplay />
        </Stack>
      </Paper>
    </Stack>
  );
};
