import React from 'react';


function HeaderLogo() {
  return (
    <div className='flex justify-between px-4 py-3 xl:w-72 xl:bg-white-900 xl:justify-start xl:py-3 shadow'>
      <img loading="lazy" alt='logo' src="./logo.png" />
    </div>
  );
}

export default HeaderLogo;
