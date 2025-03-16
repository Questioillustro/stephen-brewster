import BasicTab, { TabData } from '@/components/tabs/BasicTab';
import { PythonScripts } from '@/apps/pythonscripts/PythonScripts';
import { Agents } from '@/apps/agents/Agents';
import { Paper } from '@mui/material';

export const AppsPage: React.FC = () => {
  const tabs: TabData[] = [
    {
      label: 'Python Scripts',
      content: <PythonScripts />,
    },
    {
      label: 'AI Agents',
      content: <Agents />,
    },
  ];

  return (
    <Paper square sx={{ width: '100%', display: 'flex' }}>
      <BasicTab tabs={tabs} />
    </Paper>
  );
};
