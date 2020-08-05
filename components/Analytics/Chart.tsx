import React from 'react';
import { LineChart, Line } from 'recharts';

export const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

interface chartProps {
  items: number[];
  title: string;
  colour: string;
  name: string[];
}
export const Chart = ({ items, title, colour, name }: chartProps) => {
  return (
    <div className='mt-2 px-4 py-4 w-6/12 min-w-xl bg-white dark:bg-gray-600 shadow-md rounded-lg cursor-pointer'>
      <h2 className='text-2xl h-10 text-gray-700'>{title}</h2>
      <h2 className='text-2xl h-10 text-gray-700'>
        {items} {colour}
        {name}
      </h2>
      <LineChart width={400} height={400} data={data}>
        <Line  dataKey='uv' stroke='#8884d8' />
      </LineChart>
    </div>
  );
};
