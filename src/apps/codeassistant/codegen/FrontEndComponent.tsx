import { Paper, Stack } from '@mui/material';
import { UiLibraryAutoComplete } from '@/apps/codeassistant/codegen/components/feframework/UiLibraryAutoComplete';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { FeFrameworkAutocomplete } from '@/apps/codeassistant/codegen/components/feframework/FeFrameworkAutocomplete';
import { ComponentTitle } from '@/apps/codeassistant/codegen/components/ComponentTitle';

const FrontEndComponent = () => {
  const context = useCodegenContext();
  return (
    <Paper elevation={2} sx={{ p: 2, display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
      <ComponentTitle title={'FE Framework'} />

      <Stack direction={'row'} sx={{ gap: 2 }}>
        <FeFrameworkAutocomplete />

        {context.codeGen.request.framework && <UiLibraryAutoComplete />}
      </Stack>
    </Paper>
  );
};

export default FrontEndComponent;
