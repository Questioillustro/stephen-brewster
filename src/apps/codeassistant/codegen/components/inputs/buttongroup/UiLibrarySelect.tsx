import GenericButtonGroup from '@/apps/codeassistant/codegen/components/inputs/buttongroup/GenericButtonGroup';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

export const UiLibrarySelect = () => {
  const context = useCodegenContext();

  return (
    <GenericButtonGroup
      labels={context.framework?.uiLibraries}
      label={'UI Library'}
      selected={context.uiLibrary}
      onSelect={context.setUiLibrary}
    />
  );
};
