import { Option } from 'interfaces/MenuOptions';
import Icon from 'icons';

interface Iprops {
  item: Option;
}

const OptionsListItem = ({ item }: Iprops) => {
  return (
    <li key={item.id} className='my-px'>
      <a
        href={`/` + item.name}
        className='flex flex-row items-center h-10 px-4 leading-snug rounded-lg font-medium text-gray-800 hover:bg-indigo-100 hover:text-indigo-700 hover:indigo-500'
      >
        <Icon name={item.icon} width={15} fill='#78909C' />

        <span className='ml-3'>{item.name}</span>
      </a>
    </li>
  );
};

export default OptionsListItem;
