import GenericButtonGroup from '@/apps/codeassistant/codegen/components/inputs/buttongroup/GenericButtonGroup';
import { FrontEndFrameworkOptions } from '@/apps/codeassistant/codegen/data/AllOptions';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

export const FeFrameworkButtonGroup = () => {
  const context = useCodegenContext();

  const doSetFramework = (framework: string) => {
    const frameworkOption = FrontEndFrameworkOptions.find((f) => f.framework === framework);
    if (frameworkOption) context.setFeFramework(frameworkOption);
  };

  return (
    <GenericButtonGroup
      labels={FrontEndFrameworkOptions.map((fefo) => fefo.framework)}
      label={'FE Framework'}
      selected={context.codeGen.request.framework?.framework}
      onSelect={doSetFramework}
    />
  );
};
