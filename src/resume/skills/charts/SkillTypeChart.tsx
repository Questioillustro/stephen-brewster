import { PieChart } from '@mui/x-charts';
import { SkillTypeArray, useSkillsHook } from '../Skills.hook';

function SkillTypeChart() {
  const skills = useSkillsHook();

  const data: any[] = [];

  const feBE = ['Front End', 'Back End', 'Database'];

  for (var x = 0; x < feBE.length; x++) {
    const total = skills
      .filter((s) => s.skillType === feBE[x])
      .map((s) => s.years)
      .reduce((partialSum, a) => partialSum + a, 0);
    data.push({ id: x, value: total, label: feBE[x] });
  }

  return (
    <PieChart
      series={[
        {
          data: data,
        },
      ]}
      width={500}
      height={300}
    />
  );
}

export default SkillTypeChart;
