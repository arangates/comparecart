import React from 'react';

interface Iprops {
  title?: string;
  subTitle?: string;
}

const Title = ({ title, subTitle }: Iprops) => {
  return (
    <>
      <h1 className='text-2xl h-10 text-blue-grey'>
        {title ? title : 'Search for a product'}
      </h1>
      <h5 className='text-gray-600 dark:text-gray-400'>{subTitle}</h5>
    </>
  );
};

export default Title;
