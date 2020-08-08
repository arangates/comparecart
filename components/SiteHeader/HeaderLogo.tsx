import Link from 'next/link';
import Icon from 'icons';

function HeaderLogo() {
  return (
    <div className='flex justify-between px-4 py-3 xl:w-72 xl:bg-white-900 xl:justify-start xl:py-3 cursor-pointer xl:shadow'>
      <Link href='/'>
        <img loading='lazy' alt='logo' src='./logo.png' />
      </Link>
      <Link href='/compare'>
        <span className='flex sm:hidden items-center justify-center text-lg blue-grey-800 mr-10 cursor-pointer'>
          <svg
            width='25'
            height='25'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.8002 12.8C4.48375 12.8 4.1744 12.8938 3.91128 13.0697C3.64816 13.2455 3.44309 13.4953 3.32199 13.7877C3.20089 14.0801 3.1692 14.4018 3.23094 14.7121C3.29268 15.0225 3.44506 15.3076 3.66883 15.5314C3.89259 15.7551 4.17769 15.9075 4.48806 15.9693C4.79843 16.031 5.12013 15.9993 5.4125 15.8782C5.70486 15.7571 5.95474 15.552 6.13055 15.2889C6.30636 15.0258 6.4002 14.7165 6.4002 14.4C6.40112 14.1896 6.36037 13.9811 6.28029 13.7866C6.20021 13.5921 6.0824 13.4153 5.93364 13.2666C5.78488 13.1178 5.60813 13 5.41359 12.9199C5.21905 12.8398 5.01057 12.7991 4.8002 12.8Z'
              fill='#4553F0'
            />
            <path
              d='M12.8002 12.8C12.4837 12.8 12.1744 12.8938 11.9113 13.0697C11.6482 13.2455 11.4431 13.4953 11.322 13.7877C11.2009 14.0801 11.1692 14.4018 11.2309 14.7121C11.2927 15.0225 11.4451 15.3076 11.6688 15.5314C11.8926 15.7551 12.1777 15.9075 12.488 15.9693C12.7984 16.031 13.1201 15.9993 13.4125 15.8782C13.7048 15.7571 13.9547 15.552 14.1305 15.2889C14.3063 15.0258 14.4002 14.7165 14.4002 14.4C14.4011 14.1896 14.3604 13.9811 14.2803 13.7866C14.2002 13.5921 14.0824 13.4153 13.9336 13.2666C13.7849 13.1178 13.6081 13 13.4136 12.9199C13.219 12.8398 13.0106 12.7991 12.8002 12.8Z'
              fill='#4553F0'
            />
            <path
              d='M5.68 8.8H11.64C11.9256 8.79961 12.2058 8.72305 12.4519 8.5782C12.698 8.43336 12.901 8.22547 13.04 7.976L15.9 2.784C15.9662 2.66688 16.0006 2.53452 16 2.4C16 2.18783 15.9157 1.98434 15.7657 1.83431C15.6157 1.68429 15.4122 1.6 15.2 1.6H3.372L2.612 0H0V1.6H1.6L4.476 7.668L3.4 9.628C3.27028 9.86474 3.20155 10.1301 3.2 10.4C3.2 10.8243 3.36857 11.2313 3.66863 11.5314C3.96869 11.8314 4.37565 12 4.8 12H14.4V10.4H5.14C5.08696 10.4 5.03609 10.3789 4.99858 10.3414C4.96107 10.3039 4.94 10.253 4.94 10.2C4.93866 10.1651 4.94696 10.1305 4.964 10.1L5.68 8.8Z'
              fill='#4553F0'
            />
          </svg>
          <Icon name='Bars' width={15} fill='#78909C' />
        </span>
      </Link>
    </div>
  );
}

export default HeaderLogo;
