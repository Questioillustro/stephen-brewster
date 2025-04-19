import FrameworkButtonGroup from '@/apps/codeassistant/codegen/components/FrameworkButtonGroup';
import { Stack } from '@mui/material';
import TypescriptCheckbox from '@/apps/codeassistant/codegen/components/TypescriptCheckbox';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import GenericButtonGroup from '@/apps/codeassistant/codegen/components/GenericButtonGroup';
import PromptField from '@/apps/codeassistant/codegen/components/PromptField';
import SendPromptButton from '@/apps/codeassistant/codegen/components/SendPromptButton';
import CommentsCheckbox from '@/apps/codeassistant/codegen/components/CommentsCheckbox';
import PromptDisplay from '@/apps/codeassistant/codegen/components/PromptDisplay';
import SeparateStylesFile from '@/apps/codeassistant/codegen/components/SeparateStylesFile';
import CodeTabs from '@/apps/codeassistant/codegen/components/CodeTabs';

const FrontEndComponent = () => {
  const context = useCodegenContext();

  return (
    <Stack direction={'column'} sx={{ gap: 2 }}>
      <Stack direction={'row'} sx={{ gap: 2, display: 'flex', width: '100%' }}>
        <Stack direction={'column'} sx={{ gap: 2, display: 'flex', width: '60%' }}>
          <FrameworkButtonGroup />

          <GenericButtonGroup
            labels={context.framework.uiLibraries}
            label={'UI Library'}
            onSelect={context.addUiLibrary}
          />

          <Stack direction={'row'} sx={{ width: '100%' }}>
            <CommentsCheckbox />

            <SeparateStylesFile />

            {context.framework.tsOption && <TypescriptCheckbox />}
          </Stack>

          <Stack direction={'row'} sx={{ display: 'flex', width: '80%', gap: 2 }}>
            <PromptField />
            <SendPromptButton />
          </Stack>
        </Stack>

        <Stack sx={{ width: '40%' }}>
          <PromptDisplay />
        </Stack>
      </Stack>

      <Stack>{context.codeDisplay && !context.loading && <CodeTabs />}</Stack>
    </Stack>
  );
};

export default FrontEndComponent;
