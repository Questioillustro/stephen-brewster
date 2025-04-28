import { Paper, Stack } from '@mui/material';
import { UiLibrarySelect } from '@/apps/codeassistant/codegen/components/inputs/buttongroup/UiLibrarySelect';
import { FrameworkButtonGroup } from '@/apps/codeassistant/codegen/components/inputs/buttongroup/FrameworkSelect';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

const FrontEndComponent = () => {
  const context = useCodegenContext();
  return (
    <Stack sx={{ flexDirection: { sm: 'column', lg: 'row' }, gap: 2, mb: 2 }}>
      <Paper elevation={2} sx={{ width: '100%' }}>
        <FrameworkButtonGroup />
      </Paper>

      {context.framework && (
        <Paper elevation={2} sx={{ width: '100%' }}>
          <UiLibrarySelect />
        </Paper>
      )}
    </Stack>
  );
};

export default FrontEndComponent;
