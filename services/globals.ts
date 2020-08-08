import { MenuOptions } from 'interfaces/MenuOptions';

export const BOL_SERVER = 'https://api.bol.com';
export const PROXY_SERVER = 'https://cors-anywhere.herokuapp.com/';
export const baseURL = PROXY_SERVER + BOL_SERVER;
export const CATALOG_SEARCH = '/catalog/v4/search/';
export const BOL_CATALOG_URL = baseURL + CATALOG_SEARCH;

export const INDEXED_DB_NAME = 'selectedProducts';
export const DEFAULT_PARAMS: object = {
  q: 'harry',
  limit: 20,
  dataoutput: 'products',
  apikey: 'DA31B370BBDF4DE78B57BBEA652ADC94',
  format: 'json',
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
    name: 'Action',
  },
];

export const MenuItems: MenuOptions[] = [
  {
    id: 1,
    name: 'my store',
    options: [
      {
        id: 1,
        icon: 'TachometerAlt',
        name: 'Item Name',
      },
      {
        id: 2,
        icon: 'BoxHeart',
        name: 'Item Name',
      },
      {
        id: 3,
        icon: 'Truck',
        name: 'Item Name',
      },
      {
        id: 4,
        icon: 'Bullhorn',
        name: 'Item Name',
      },
    ],
  },
  {
    id: 2,
    name: 'Research Products',
    options: [
      {
        id: 1,
        icon: 'Analytics',
        name: 'Item Name',
      },
      {
        id: 2,
        icon: 'Database',
        name: 'Item Name',
      },
      {
        id: 3,
        icon: 'Search',
        name: 'Item Name',
      },
      {
        id: 4,
        icon: 'SpellCheck',
        name: 'Item Name',
      },
      {
        id: 5,
        icon: 'Calculator',
        name: 'Item Name',
      },
    ],
  },
  {
    id: 3,
    name: 'Learn',
    options: [
      {
        id: 1,
        icon: 'Camcorder',
        name: 'Item Name',
      },
      {
        id: 2,
        icon: 'Books',
        name: 'Item Name',
      },
    ],
  },
  {
    id: 4,
    name: 'Settings',
    options: [
      {
        id: 1,
        icon: 'Account',
        name: 'Item Name',
      },
      {
        id: 2,
        icon: 'CreditCard',
        name: 'Item Name',
      },
      {
        id: 3,
        icon: 'Store',
        name: 'Item Name',
      },
    ],
  },
];
