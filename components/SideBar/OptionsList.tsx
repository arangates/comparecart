import React from 'react';
import OptionsListItem from './OptionsListItem';
import OptionsListHeading from './OptionsListHeading';
import { MenuOptions, Option } from './MenuOptions';

interface Iprops {
  menuOptions: MenuOptions[];
}

const OptionsList = ({ menuOptions }: Iprops) => {
  return (
    <div className='sidebar-content px-4 py-6'>
      <ul className='flex flex-col w-full'>{renderOptions(menuOptions)}</ul>
    </div>
  );
};

const renderOptions = (menuOptions: MenuOptions[]): React.ReactNode => {
  return menuOptions.map((option: MenuOptions) => {
    return (
      <div key={option.id}>
        <OptionsListHeading title={option.name} />
        {option.options.map((option: Option) => (
          <OptionsListItem key={option.id} item={option} />
        ))}
      </div>
    );
  });
};

export default OptionsList;
