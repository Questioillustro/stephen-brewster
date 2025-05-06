import { Stack } from '@mui/material';
import { SpecialRequests } from '@/apps/codeassistant/codegen/components/specialrequests/SpecialRequests';
import CodeExampleInput from '@/apps/codeassistant/codegen/components/codeexample/CodeExampleInput';
import LlmSelect from '@/apps/codeassistant/codegen/components/llmselect/LlmSelect';
import PromptField from '@/apps/codeassistant/codegen/components/PromptField';
import SendPromptButton from '@/apps/codeassistant/codegen/components/SendPromptButton';
import PromptDisplay from '@/apps/codeassistant/codegen/components/PromptDisplay';
import { CAPaperPanel } from '@/apps/codeassistant/components/CAPaperPanel';

export const PromptInputs = () => {
  return (
    <Stack sx={{ flexDirection: 'column', gap: 2, width: '100%' }}>
      <Stack sx={{ gap: 2, width: '100%', flexDirection: { sm: 'column', md: 'row' } }}>
        <SpecialRequests />
      </Stack>

      <CAPaperPanel>
        <Stack direction={'column'} sx={{ gap: 2, p: 2 }}>
          <Stack
            direction={'row'}
            sx={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <LlmSelect />
            <CodeExampleInput />
            <PromptDisplay />
          </Stack>

          <Stack direction={'row'} sx={{ gap: 2, pt: 1 }}>
            <PromptField />
            <SendPromptButton />
          </Stack>
        </Stack>
      </CAPaperPanel>
    </Stack>
  );
};
