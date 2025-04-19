import BasicTab, { TabData } from '@/components/tabs/BasicTab';
import { PythonScripts } from '@/apps/pythonscripts/PythonScripts';
import { Agents } from '@/apps/agents/Agents';
import { Paper } from '@mui/material';
import BuildAVentureApp from '@/apps/cyoa/BuildAVentureApp';
import FinanceNewsPanel from '@/apps/finance/FinanceNewsPanel';
import ReactConcepts from '@/apps/react/ReactConcepts';
import CodeAssistant from '@/apps/codeassistant/CodeAssistant';

export const AppsPage: React.FC = () => {
  const tabs: TabData[] = [
    {
      label: 'Build-A-Venture',
      content: <BuildAVentureApp />,
    },
    // {
    //   label: 'Finance News',
    //   content: <FinanceNewsPanel />,
    // },
    {
      label: 'Code Assistant',
      content: <CodeAssistant />,
    },
    // {
    //   label: 'React Concepts',
    //   content: <ReactConcepts />,
    // },
    // {
    //   label: 'Python Scripts',
    //   content: <PythonScripts />,
    // },
    // {
    //   label: 'AI Agents',
    //   content: <Agents />,
    // },
  ];

  return (
    <Paper square sx={{ width: '100%', display: 'flex' }}>
      <BasicTab tabs={tabs} />
    </Paper>
  );
};
