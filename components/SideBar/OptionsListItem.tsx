import { Option } from 'interfaces/MenuOptions';
import Icon from 'icons';
import { useState } from 'react';

interface Iprops {
  item: Option;
}

const OptionsListItem = ({ item }: Iprops) => {
  const [fill, setFill] = useState('#78909C');
  return (
    <li
      key={item.id}
      className='my-px'
      onMouseEnter={() => setFill('#4553F0')}
      onMouseLeave={() => setFill('#78909C')}
    >
      <a
        href={`/` + item.name}
        className='flex flex-row items-center h-10 px-4 rounded-lg font-medium text-gray-800 hover:bg-royalblue-100 hover:text-royalblue-700'
      >
        <Icon name={item.icon} width={15} fill={fill} />

        <span className='ml-3'>{item.name}</span>
      </a>
    </li>
  );
};

export default OptionsListItem;
