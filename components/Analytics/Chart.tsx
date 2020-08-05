import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

interface chartProps {
  items: object[];
  title: string;
  colour: string;
}

export const Chart = ({ items, title, colour }: chartProps) => {
  return (
    <div className='mt-2 px-4 py-4 w-6/12 min-w-xl bg-white dark:bg-gray-600 shadow-md rounded-lg cursor-pointer'>
      <h2 className='text-2xl h-10 text-gray-700'>{title}</h2>

      <BarChart
        width={500}
        height={300}
        data={items}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis stroke={''} dataKey='name' tick={false} />
        <YAxis stroke={''} domain={[10, 'auto']} />
        <Tooltip
          cursor={{ stroke: '#9d8cc3', strokeWidth: 0.1 }}
          formatter={(name) => [`${title} ${name}`]}
        />
        <Bar
          dataKey='val'
          fill={colour}
          barSize={15}
          radius={[10, 10, 10, 10]}
        />
      </BarChart>
    </div>
  );
};
