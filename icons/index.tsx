import { default as Account } from './Account';
import { default as Analytics } from './Analytics';
import { default as Books } from './Books';
import { default as BoxHeart } from './BoxHeart';
import { default as Bullhorn } from './Bullhorn';
import { default as Calculator } from './Calculator';
import { default as Camcorder } from './Camcorder';
import { default as CreditCard } from './CreditCard';
import { default as Database } from './Database';
import { default as ExternalLink } from './ExternalLink';
import { default as Search } from './Search';
import { default as SpellCheck } from './SpellCheck';
import { default as Store } from './Store';
import { default as TachometerAlt } from './TachometerAlt';
import { default as Truck } from './Truck';
import { default as Bars } from './Bars';
import { default as Bell } from './Bell';
import { default as Cart } from './Cart';
import { default as Menu } from './Menu';

const Icon: any = (props: React.SVGProps<SVGSVGElement>) => {
  switch (props.name) {
    case 'Account':
      return <Account {...props} />;
    case 'Analytics':
      return <Analytics {...props} />;
    case 'Books':
      return <Books {...props} />;
    case 'BoxHeart':
      return <BoxHeart {...props} />;
    case 'Bullhorn':
      return <Bullhorn {...props} />;
    case 'Calculator':
      return <Calculator {...props} />;
    case 'Camcorder':
      return <Camcorder {...props} />;
    case 'CreditCard':
      return <CreditCard {...props} />;
    case 'Database':
      return <Database {...props} />;
    case 'ExternalLink':
      return <ExternalLink {...props} />;
    case 'Search':
      return <Search {...props} />;
    case 'SpellCheck':
      return <SpellCheck {...props} />;
    case 'Store':
      return <Store {...props} />;
    case 'TachometerAlt':
      return <TachometerAlt {...props} />;
    case 'Truck':
      return <Truck {...props} />;
    case 'Bars':
      return <Bars {...props} />;
    case 'Bell':
      return <Bell {...props} />;
    case 'Cart':
      return <Cart {...props} />;
    case 'Menu':
      return <Menu {...props} />;
    default:
      return;
  }
};

export default Icon;
