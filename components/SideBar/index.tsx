import React from 'react';
import OptionsList from './OptionsList';
import { MenuItems } from 'services/globals';

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
