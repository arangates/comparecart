import Link from 'next/link';
import Icon from 'icons';
import { useToogleDispatch } from 'context/toogle-context';

function HeaderLogo() {
  const dispatch = useToogleDispatch();
  return (
    <div className='flex justify-between px-4 py-3 xl:w-72 xl:bg-white-900 xl:justify-start xl:py-3 cursor-pointer xl:shadow'>
      <Link href='/'>
        <img loading='lazy' alt='logo' src='./logo.png' />
      </Link>
      <div className='flex sm:hidden items-center justify-between w-36 px-4 cursor-pointer'>
        <Link href='/compare'>
          <span>
            <Icon name='Cart' width={40} fill='#4553F0' />
          </span>
        </Link>
        <span onClick={() => dispatch({ type: 'toogle' })}>
          <Icon name='Bars' width={40} fill='#78909C' />
        </span>
      </div>
    </div>
  );
}

export default HeaderLogo;
