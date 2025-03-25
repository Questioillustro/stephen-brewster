import { Paper } from '@mui/material';
import CalendarOfEvents from '@/apps/finance/CalendarOfEvents';

export interface IFinanceNewsPanelProps {}

const FinanceNewsPanel: React.FC<IFinanceNewsPanelProps> = () => {
  return (
    <Paper square elevation={10}>
      <CalendarOfEvents />
    </Paper>
  );
};

export default FinanceNewsPanel;
