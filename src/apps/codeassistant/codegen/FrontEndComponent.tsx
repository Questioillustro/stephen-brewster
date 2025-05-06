import { Paper, Stack } from '@mui/material';
import { UiLibraryAutoComplete } from '@/apps/codeassistant/codegen/components/feframework/UiLibraryAutoComplete';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { FeFrameworkAutocomplete } from '@/apps/codeassistant/codegen/components/feframework/FeFrameworkAutocomplete';
import { ComponentTitle } from '@/apps/codeassistant/codegen/components/ComponentTitle';
import { CAPaperPanel } from '@/apps/codeassistant/components/CAPaperPanel';

const FrontEndComponent = () => {
  const context = useCodegenContext();
  return (
    <CAPaperPanel>
      <ComponentTitle title={'FE Framework'} />

      <Stack direction={'row'} sx={{ gap: 2 }}>
        <FeFrameworkAutocomplete />

        {context.codeGen.request.framework && <UiLibraryAutoComplete />}
      </Stack>
    </CAPaperPanel>
  );
};

export default FrontEndComponent;
