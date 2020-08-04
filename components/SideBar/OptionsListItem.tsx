import React from 'react';
import { Item } from './MenuOptions';

interface Iprops {
  item: Item;
}

const OptionsListItem = ({ item }: Iprops) => {
  return (
    <li key={item.id} className='my-px'>
      <a
        href={`/` + item.name}
        className='flex flex-row items-center h-10 px-3 rounded-lg blue-gray-300 hover:bg-purple-200 hover:text-purple-700 hover:purple-800'
      >
        <span className='flex items-center justify-center text-lg blue-grey-800'>
          <svg
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' />
          </svg>
        </span>
        <span className='ml-3'>{item.name}</span>
      </a>
    </li>
  );
};

export default OptionsListItem;
