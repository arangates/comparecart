import React from 'react';
import { Chart } from './Chart';
interface Iprops {
  prices?: number[];
  ratings?: number[];
  name: string[];
}

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
