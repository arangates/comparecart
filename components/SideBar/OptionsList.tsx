import React from 'react';
import OptionsListItem from './OptionsListItem';
import OptionsListHeading from './OptionsListHeading';
import { MenuOptions, Item } from './MenuOptions';

interface Iprops {
  menuOptions: MenuOptions;
}

const OptionsList = ({ menuOptions }: Iprops) => {
  return (
    <div className='sidebar-content px-4 py-6'>
      <ul className='flex flex-col w-full'>{renderOptions(menuOptions)}</ul>
    </div>
  );
};

const renderOptions = (menuOptions: MenuOptions): React.ReactNode => {
  return Object.entries(menuOptions).map(([heading, options]) => {
    return (
      <div key={heading}>
        <OptionsListHeading key={heading} title={heading} />
        {options.map((option:Item) => (
          <OptionsListItem key={option.id} item={option} />
        ))}
      </div>
    );
  });
};

export default OptionsList;
