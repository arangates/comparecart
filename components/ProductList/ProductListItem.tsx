import React from 'react';
import { Product } from './Product';
// import { set, get } from 'idb-keyval';

interface IProps {
  product: Product;
  handleAddToCart: any;
}

function getMinY(offers: any) {
  let lowestPrice: number = 0;

  if (offers.length && offers.length > 1) {
    lowestPrice = offers.reduce(
      (min: any, p: any) => (p.y < min ? p.y : min),
      offers[0].y
    );
  } else {
    lowestPrice = offers[0].price;
  }

  return lowestPrice;
}

const AveragePrice = ({ offers }: any) => {
  let avgPrice: number = 0;

  if (offers.length && offers.length > 1) {
    avgPrice = offers.reduce((a: any, b: any) => a.price + b.price);
  } else {
    avgPrice = offers[0].price;
  }

  return (
    <div className='hidden md:block text-gray-600 dark:text-gray-400'>
      <span className='mt-2 text-black dark:text-gray-200'>€{avgPrice}</span>
    </div>
  );
};

const LowestPrice = ({ offers }: any) => {
  return (
    <div className='hidden md:block text-gray-600 dark:text-gray-400'>
      <span className='mt-2 text-black dark:text-gray-200'>
        €{getMinY(offers)}
      </span>
    </div>
  );
};

const ProductListItem = ({ product, handleAddToCart }: IProps) => {
  return (
    <div className='mt-2 mr-5 pr-10 flex px-4 py-4 justify-between bg-white dark:bg-gray-600 shadow-md rounded-lg cursor-pointer'>
      <div className='flex justify-between'>
        <img 
          loading="lazy"
          className='h-12 w-12 rounded-full object-cover'
          src={product.images ? product.images[1].url : ''}
          alt={product.title}
        />

        <div className='ml-4 flex flex-col text-gray-600 dark:text-gray-400'>
          <span className='w-20 max-w-xs truncate mt-2 text-black dark:text-gray-200'>
            {product.title}
          </span>
          <span>EAN:{product.ean}</span>
        </div>
      </div>
      <AveragePrice offers={product.offerData.offers} />
      <LowestPrice offers={product.offerData.offers} />

      <div className='hidden md:block text-gray-600 dark:text-gray-400'>
        <span className='mt-2 text-black dark:text-gray-200'>
          {product.rating}
        </span>
      </div>

      <div className='hidden md:block text-gray-600 dark:text-gray-400'>
        <span className='mt-2 text-black dark:text-gray-200'>
          {product.offerData.offers.length}
        </span>
      </div>

      <div className='text-gray-600 dark:text-gray-400'>
        <span>
          {product.selected}
          <button
            onClick={() => handleAddToCart(product)}
            className='bg-transparent outline-none hover:bg-purple-100 text-indigo-700 font-semibold hover:text-indigo py-2 px-4 border border-indigo-500 hover:border-transparent rounded-full'
          >
            <span className='hidden md:block'>
              {product.selected ? 'Remove' : 'Add to cart'}
            </span>
            <span className='sm:block md:hidden'>
              {' '}
              {product.selected ? '-' : '+'}
            </span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default ProductListItem;
