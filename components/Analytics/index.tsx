import React from 'react';
import { LineChart, Line } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
interface Iprops {
  prices?: number[];
  ratings?: number[];
  name: string[];
}

interface chartProps {
  items: number[];
  title: string;
  colour: string;
  name: string[];
}

const Chart = ({ items, title, colour, name }: chartProps) => {
  return (
    <div className='mt-2 px-4 py-4 w-6/12 min-w-xl bg-white dark:bg-gray-600 shadow-md rounded-lg cursor-pointer'>
      <h2 className='text-2xl h-10 text-gray-700'>{title}</h2>
      <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
    </div>
  );
};

const Analytics = ({ prices, ratings, name }: Iprops) => {
  return (
    <div className='flex relative py-5'>
      {prices ? (
        <Chart colour='#6A75F3' title='Avg. Price' items={prices} name={name} />
      ) : (
        ''
      )}
      {ratings ? (
        <Chart
          colour='#FF6F31'
          title='Product Rating'
          items={ratings}
          name={name}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Analytics;
