import { BarChart } from '@mui/x-charts';
import { useSkillsHook } from '@/apps/resume/skills/Skills.hook';

function SBBarChart() {
  const skills = useSkillsHook();

  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['bar A', 'bar B', 'bar C'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [2, 5, 3],
        },
      ]}
      width={500}
      height={300}
    />
  );
}

export default SBBarChart;
