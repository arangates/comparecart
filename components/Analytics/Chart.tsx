import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface chartProps {
  items: object[];
  title: string;
  colour: string;
}

export const Chart = ({ items, title, colour }: chartProps) => {
  return (
    <div className='graph-card--shadow flex-auto py-8 bg-white dark:bg-gray-600 shadow-md rounded-lg cursor-pointer mb-8 md:mb-0'>
      <h2 className='text-2xl h-10 text-gray-700 px-8'>{title}</h2>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={500}
          height={400}
          data={items}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis stroke={''} dataKey='name' tick={false} />
          <YAxis stroke={''} tick={{ fill: '#B0BEC5' }} />
          <Tooltip
            contentStyle={{
              borderRadius: '20px',
              borderColor: colour,
            }}
            formatter={(name) => [`${title}: ${name}`]}
          />
          <Bar
            dataKey='val'
            fill={colour}
            barSize={10}
            radius={[10, 10, 10, 10]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
