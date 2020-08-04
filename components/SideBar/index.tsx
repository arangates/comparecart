import React from 'react';
import OptionsList from './OptionsList';
import { MenuOptions } from './MenuOptions';

const MenuItems: MenuOptions = {
  'my store': [
    {
      id: 1,
      icon: 'some.svg',
      name: 'Item Name',
    },
    {
      id: 2,
      icon: 'some.svg',
      name: 'Item Name',
    },
    {
      id: 3,
      icon: 'some.svg',
      name: 'Item Name',
    },
    {
      id: 4,
      icon: 'some.svg',
      name: 'Item Name',
    },
  ],
  'Research Products': [
    {
      id: 5,
      icon: 'some.svg',
      name: 'Item Name',
    },
    {
      id: 6,
      icon: 'some.svg',
      name: 'Item Name',
    },
    {
      id: 7,
      icon: 'some.svg',
      name: 'Item Name',
    },
    {
      id: 8,
      icon: 'some.svg',
      name: 'Item Name',
    },
  ],
  Learn: [
    {
      id: 9,
      icon: 'some.svg',
      name: 'Item Name',
    },
    {
      id: 10,
      icon: 'some.svg',
      name: 'Item Name',
    },
  ],
  Settings: [
    {
      id: 11,
      icon: 'some.svg',
      name: 'Item Name',
    },
    {
      id: 12,
      icon: 'some.svg',
      name: 'Item Name',
    },
    {
      id: 13,
      icon: 'some.svg',
      name: 'Item Name',
    },
  ],
};

const SideBar = () => {
  return (
    <section className='bg-white-800 xl:w-72 shadow'>
      <div className='xl:h-full xl:flex xl:flex-col xl:justify-between hidden'>
        <OptionsList menuOptions={MenuItems} />
      </div>
    </section>
  );
};

export default SideBar;
