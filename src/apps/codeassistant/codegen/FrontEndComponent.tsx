import FrameworkButtonGroup from '@/apps/codeassistant/codegen/components/FrameworkButtonGroup';
import { Paper, Stack } from '@mui/material';
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
    <Stack direction={'column'} sx={{ gap: 2, fontSize: { xs: '8px', sm: '10px', md: '16px' } }}>
      <Stack direction={'row'} sx={{ gap: 2, display: 'flex', width: '100%' }}>
        <Stack
          direction={'column'}
          sx={{ gap: 2, display: 'flex', width: { xs: '100%', sm: '100%', md: '60%' } }}
        >
          <Paper elevation={2} sx={{ display: 'flex', width: '100%' }}>
            <FrameworkButtonGroup />
          </Paper>

          <Paper elevation={2} sx={{ display: 'flex', width: '100%' }}>
            <GenericButtonGroup
              labels={context.framework.uiLibraries}
              label={'UI Library'}
              onSelect={context.addUiLibrary}
            />
          </Paper>

          <Paper elevation={2} sx={{ p: 2 }}>
            <Stack direction={'row'} sx={{ width: '100%' }}>
              <CommentsCheckbox />

              <SeparateStylesFile />

              {context.framework.tsOption && <TypescriptCheckbox />}
            </Stack>
          </Paper>

          <Paper elevation={2} sx={{ p: 2 }}>
            <Stack direction={'row'} sx={{ display: 'flex', width: '100%', gap: 2 }}>
              <PromptField />
              <SendPromptButton />
            </Stack>
          </Paper>
        </Stack>

        <Paper
          elevation={2}
          sx={{ p: 2, display: { xs: 'none', sm: 'none', md: 'flex' }, width: '45%' }}
        >
          <PromptDisplay />
        </Paper>
      </Stack>

      <Paper elevation={2} sx={{ p: 0 }}>
        <Stack>{context.codeDisplay && !context.loading && <CodeTabs />}</Stack>
      </Paper>
    </Stack>
  );
};

export default FrontEndComponent;
