import FrontEndComponent from '@/apps/codeassistant/codegen/FrontEndComponent';
import { CodegenProvider } from '@/apps/codeassistant/codegen/context/CodegenContext';

const CodeAssistant = () => {
  return (
    <CodegenProvider>
      <FrontEndComponent />
    </CodegenProvider>
  );
};

export default CodeAssistant;
