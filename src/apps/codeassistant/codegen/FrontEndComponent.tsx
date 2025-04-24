import FrameworkButtonGroup from '@/apps/codeassistant/codegen/components/inputs/FrameworkButtonGroup';
import { Paper, Stack } from '@mui/material';
import TypescriptCheckbox from '@/apps/codeassistant/codegen/components/inputs/TypescriptCheckbox';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import GenericButtonGroup from '@/apps/codeassistant/codegen/components/inputs/GenericButtonGroup';
import PromptField from '@/apps/codeassistant/codegen/components/PromptField';
import SendPromptButton from '@/apps/codeassistant/codegen/components/inputs/SendPromptButton';
import CommentsCheckbox from '@/apps/codeassistant/codegen/components/inputs/CommentsCheckbox';
import PromptDisplay from '@/apps/codeassistant/codegen/components/PromptDisplay';
import SeparateStylesFile from '@/apps/codeassistant/codegen/components/inputs/SeparateStylesFile';
import LlmSelect from '@/apps/codeassistant/codegen/components/inputs/llmselect/LlmSelect';

const FrontEndComponent = () => {
  const context = useCodegenContext();

  return (
    <Stack direction={'column'} sx={{ gap: 2, display: 'flex' }}>
      <Paper elevation={2}>
        <FrameworkButtonGroup />
      </Paper>

      <Paper elevation={2}>
        <GenericButtonGroup
          labels={context.framework.uiLibraries}
          label={'UI Library'}
          onSelect={context.addUiLibrary}
        />
      </Paper>

      <Paper elevation={2} sx={{ p: 2 }}>
        <Stack direction={'row'}>
          <CommentsCheckbox />

          <SeparateStylesFile />

          {context.framework.tsOption && <TypescriptCheckbox />}
        </Stack>
      </Paper>

      <Paper elevation={2} sx={{ p: 2 }}>
        <Stack direction={'column'} sx={{ gap: 2 }}>
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

export default FrontEndComponent;
