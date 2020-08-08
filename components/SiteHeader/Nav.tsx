import Link from 'next/link';
import { Avatar } from './Avatar';
import Icon from 'icons';
import { useRouter } from 'next/router'

 const Nav = () => {
   const router = useRouter()

  return (
    <nav className='sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-end hidden'>
      <div className='sm:flex sm:items-center'>
        <div className='px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0'>
          <Link href='/compare'>
            <span className='flex items-center justify-center text-lg blue-grey-800 mr-10 cursor-pointer'>
              <Icon
                name='Cart'
                width={18}
                fill={router.pathname === '/compare' ? '#4553F0' : '#78909C'}
              />
            </span>
          </Link>
          <span className='flex items-center justify-center text-lg blue-grey-800 mr-10'>
            <Icon name='Bell' width={18} fill='#78909C' />
          </span>
        </div>
        <Avatar />
      </div>
    </nav>
  );
}
export default Nav