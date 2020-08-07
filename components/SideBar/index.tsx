import OptionsList from './OptionsList';
import { MenuItems } from 'services/globals';

const SideBar = ({ children }: any) => {
  return (
    <div className='xl:flex-1 xl:flex xl:overflow-y-hidden'>
      <section className='bg-white-800 xl:w-72 shadow'>
        <div className='xl:h-full xl:flex xl:flex-col xl:justify-between hidden'>
          <OptionsList menuOptions={MenuItems} />
        </div>
      </section>
      {children}
    </div>
  );
};

export default SideBar;
