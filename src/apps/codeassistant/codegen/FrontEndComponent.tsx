import FrameworkButtonGroup from '@/apps/codeassistant/codegen/components/FrameworkButtonGroup';
import { Container, Stack } from '@mui/material';
import TypescriptCheckbox from '@/apps/codeassistant/codegen/components/TypescriptCheckbox';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import GenericButtonGroup from '@/apps/codeassistant/codegen/components/GenericButtonGroup';
import PromptField from '@/apps/codeassistant/codegen/components/PromptField';
import SendPromptButton from '@/apps/codeassistant/codegen/components/SendPromptButton';
import CodeBlock from '@/components/codedisplay/CodeBlock';
import Spinner from '@/apps/codeassistant/codegen/components/Spinner';

const FrontEndComponent = () => {
  const context = useCodegenContext();

  return (
    <Stack direction={'column'} sx={{ gap: 2 }}>
      <Stack direction={'row'} sx={{ alignItems: 'center' }}>
        <FrameworkButtonGroup />

        {context.framework.tsOption && (
          <Container sx={{ ml: 1 }}>
            <TypescriptCheckbox />
          </Container>
        )}
      </Stack>

      <GenericButtonGroup
        labels={context.framework.uiLibraries}
        label={'UI Library'}
        onSelect={context.addUiLibrary}
      />

      <Stack direction={'row'} sx={{ display: 'flex', width: '100%', gap: 2 }}>
        <PromptField />
        <SendPromptButton />
        {context.loading && <Spinner />}
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
