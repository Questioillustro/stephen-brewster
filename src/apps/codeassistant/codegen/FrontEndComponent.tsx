import FrameworkButtonGroup from '@/apps/codeassistant/codegen/components/FrameworkButtonGroup';
import { Container, Stack } from '@mui/material';
import TypescriptCheckbox from '@/apps/codeassistant/codegen/components/TypescriptCheckbox';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import GenericButtonGroup from '@/apps/codeassistant/codegen/components/GenericButtonGroup';
import PromptField from '@/apps/codeassistant/codegen/components/PromptField';
import SendPromptButton from '@/apps/codeassistant/codegen/components/SendPromptButton';
import CodeBlock from '@/components/codedisplay/CodeBlock';
import Spinner from '@/apps/codeassistant/codegen/components/Spinner';
import CommentsCheckbox from '@/apps/codeassistant/codegen/components/CommentsCheckbox';
import PromptDisplay from '@/apps/codeassistant/codegen/components/PromptDisplay';

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

      <Stack>
        {context.codeDisplay && !context.loading && (
          <CodeBlock code={context.codeDisplay} language={context.framework.syntaxHighlighter} />
        )}
      </Stack>
    </Stack>
  );
};

export default FrontEndComponent;
