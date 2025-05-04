import GenericButtonGroup from '@/apps/codeassistant/codegen/components/inputs/buttongroup/GenericButtonGroup';
import { FrontEndFrameworkOptionsLabels } from '@/apps/codeassistant/codegen/data/AllOptions';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

export const FeFrameworkButtonGroup = () => {
  const context = useCodegenContext();

  const doSetFramework = (framework: string) => {
    context.updateCodeGen({
      request: { ...context.codeGen.request, framework: framework },
    });
  };

  return (
    <GenericButtonGroup
      labels={FrontEndFrameworkOptionsLabels}
      label={'FE Framework'}
      selected={context.codeGen.request.framework}
      onSelect={doSetFramework}
    />
  );
};
