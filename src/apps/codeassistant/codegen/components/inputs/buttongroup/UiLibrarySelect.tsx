import GenericButtonGroup from '@/apps/codeassistant/codegen/components/inputs/buttongroup/GenericButtonGroup';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { UiLibraryMap } from '@/apps/codeassistant/codegen/data/AllOptions';

export const UiLibrarySelect = () => {
  const context = useCodegenContext();

  const setLibrary = (selected: string) => {
    context.updateCodeGen({ request: { ...context.codeGen.request, uiLibrary: selected } });
  };

  return (
    <GenericButtonGroup
      labels={UiLibraryMap[context.codeGen.request.framework ?? '']}
      label={'UI Library'}
      selected={context.codeGen.request.uiLibrary ?? undefined}
      onSelect={setLibrary}
    />
  );
};
