import React from 'react';

interface Iprops {
  title: string;
}

const OptionsListHeading = ({ title }: Iprops) => {
  return (
    <li className='my-px'>
      <span className='flex font-medium text-sm blue-gray-300 px-4 my-4 uppercase'>
        {title}
      </span>
    </li>
  );
};

export default OptionsListHeading;
