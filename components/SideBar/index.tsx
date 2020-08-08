import OptionsList from './OptionsList';
import { MenuItems } from 'services/globals';
import { useToogleState } from 'context/toogle-context';

const SideBar = ({ children }: any) => {
  const { shown } = useToogleState();
  return (
    <div className='xl:flex-1 xl:flex xl:overflow-y-hidden'>
      {shown ? (
        <section className='bg-white-800 xl:w-72 shadow transition ease-in-out duration-150'>
          <div className='xl:h-full xl:flex xl:flex-col xl:justify-between'>
            <OptionsList menuOptions={MenuItems} />
          </div>
        </section>
      ) : (
        ''
      )}
      <section className='hidden xl:block bg-white-800 xl:w-72 shadow transition ease-in-out duration-150'>
        <div className='xl:h-full xl:flex xl:flex-col xl:justify-between'>
          <OptionsList menuOptions={MenuItems} />
        </div>
      </section>
      {children}
    </div>
  );
};

export default SideBar;
