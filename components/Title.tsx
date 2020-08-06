import React from 'react';

interface Iprops {
  title?: string;
  subTitle?: string;
  htmlFor?: string;
}

const Title = ({ title, subTitle, htmlFor }: Iprops) => {
  return (
    <>
      <label htmlFor={htmlFor} className='hidden md:block text-2xl h-10 text-blue-grey'>
        {title ? title : 'Search for a product'}
      </label>
      <h2 className='text-gray-600 h-5 dark:text-gray-400'>{subTitle}</h2>
    </>
  );
};

export default Title;
