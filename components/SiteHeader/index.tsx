import HeaderLogo from './HeaderLogo';
import { Nav } from './Nav';

const SiteHeader = () => {
  return (
    <header className='bg-white-900 sm:flex sm:items-center sm:justify-between xl:bg-white'>
      <HeaderLogo />
      <Nav />
    </header>
  );
};

export default SiteHeader;
