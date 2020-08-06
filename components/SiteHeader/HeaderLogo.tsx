import React from 'react';
import Link from 'next/link';

function HeaderLogo() {
  return (
    <Link href='/'>
      <div className='flex justify-between px-4 py-3 xl:w-72 xl:bg-white-900 xl:justify-start xl:py-3 cursor-pointer shadow'>
        <img loading='lazy' alt='logo' src='./logo.png' />
      </div>
    </Link>
  );
}

export default HeaderLogo;
