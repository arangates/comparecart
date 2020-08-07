import React from 'react';
import { Chart } from './Chart';
interface Iprops {
  prices?: object[];
  ratings?: object[];
}

const Analytics = ({ prices, ratings }: Iprops) => {
  return (
    <div className='flex-col md:flex-row flex  justify-between py-10 px-5 relative'>
      {prices ? (
        <Chart colour='#6A75F3' title='Avg. Price' items={prices} />
      ) : (
        ''
      )}
      {ratings ? (
        <Chart colour='#FF6F31' title='Product Rating' items={ratings} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Analytics;
