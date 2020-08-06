import { MenuOptions } from "components/SideBar/MenuOptions";

export const BOL_SERVER = 'https://api.bol.com';
export const PROXY_SERVER = 'https://thingproxy.freeboard.io/fetch/';
export const baseURL = PROXY_SERVER + BOL_SERVER;
export const CATALOG_SEARCH = '/catalog/v4/search/';

export const BOL_CATALOG_URL = baseURL + CATALOG_SEARCH;

export const DEFAULT_PARAMS: any = {
  q: 'harry',
  offset: 0,
  limit: 20,
  dataoutput: 'products',
  apikey: 'DA31B370BBDF4DE78B57BBEA652ADC94',
  format: 'json'
};

export const TableHeading = [
  {
    id: 1,
    name: 'Product information',
  },
  {
    id: 2,
    name: 'Average price',
  },
  {
    id: 3,
    name: 'Lowest price',
  },
  {
    id: 4,
    name: 'Average rating',
  },
  {
    id: 5,
    name: 'Number  sellers',
  },
  {
    id: 6,
    name: 'Action thing',
  },
];

export const MenuItems: MenuOptions[] = [
  {
     "id":1,
     "name":"my store",
     "options":[
        {
           "id":1,
           "icon":"some.svg",
           "name":"Item Name"
        },
        {
           "id":2,
           "icon":"some.svg",
           "name":"Item Name"
        },
        {
           "id":3,
           "icon":"some.svg",
           "name":"Item Name"
        },
        {
           "id":4,
           "icon":"some.svg",
           "name":"Item Name"
        }
     ]
  },
  {
     "id":2,
     "name":"Research Products",
     "options":[
        {
           "id":1,
           "icon":"some.svg",
           "name":"Item Name"
        },
        {
           "id":2,
           "icon":"some.svg",
           "name":"Item Name"
        },
        {
           "id":3,
           "icon":"some.svg",
           "name":"Item Name"
        },
        {
           "id":4,
           "icon":"some.svg",
           "name":"Item Name"
        }
     ]
  },
  {
     "id":3,
     "name":"Learn",
     "options":[
        {
           "id":1,
           "icon":"some.svg",
           "name":"Item Name"
        },
        {
           "id":2,
           "icon":"some.svg",
           "name":"Item Name"
        },
        {
           "id":3,
           "icon":"some.svg",
           "name":"Item Name"
        },
        {
           "id":4,
           "icon":"some.svg",
           "name":"Item Name"
        }
     ]
  },
  {
     "id":4,
     "name":"Settings",
     "options":[
        {
           "id":1,
           "icon":"some.svg",
           "name":"Item Name"
        },
        {
           "id":2,
           "icon":"some.svg",
           "name":"Item Name"
        },
        {
           "id":3,
           "icon":"some.svg",
           "name":"Item Name"
        },
        {
           "id":4,
           "icon":"some.svg",
           "name":"Item Name"
        }
     ]
  }
];
