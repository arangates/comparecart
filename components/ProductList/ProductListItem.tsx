import React from 'react';
import { Product } from 'interfaces/Product';

interface IProps {
  product: Product;
  handleAddToCart?: any;
  handleRemove?: any;
  showAnalytics?: boolean;
  index: number;
}

const getMinY = (offers: any) => {
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
};

const AveragePrice = ({ offers }: any) => {
  let avgPrice: number = 0;

  if (offers.length && offers.length > 1) {
    avgPrice = offers.reduce((a: any, b: any) => a.price + b.price);
  } else {
    avgPrice = offers[0].price;
  }

  return (
    <div className='hidden md:block text-gray-700'>
      <span className='mt-2'>€{avgPrice}</span>
    </div>
  );
};

const LowestPrice = ({ offers }: any) => {
  return (
    <div className='hidden md:block text-gray-700'>
      <span className='mt-2'>€{getMinY(offers)}</span>
    </div>
  );
};

const ProductListItem = ({
  product,
  handleAddToCart,
  handleRemove,
  index,
}: IProps) => {
  return (
    <div
      className={`product-item--shadow mt-2 mx-5 pr-10 flex px-5 py-6 justify-between bg-white shadow-lg rounded-lg cursor-pointer ${
        index === 0 ? 'top-border--radius' : ''
      }`}
    >
      <div className='flex product-title--width'>
        <img
          loading='lazy'
          className='h-12 w-8 object-cover'
          src={product.images ? product.images[1].url : ''}
          alt={product.title}
        />

        <div className='ml-4 flex flex-col text-gray-800'>
          <span className='truncate'>{product.title}</span>
          <span className='text-gray-600'>EAN:{product.ean}</span>
        </div>
      </div>
      <AveragePrice offers={product.offerData.offers} />
      <LowestPrice offers={product.offerData.offers} />

      <div className='hidden md:block text-gray-700'>{product.rating}</div>

      <div className='hidden md:block text-gray-700'>
        <span className='mt-2'>{product.offerData.offers.length}</span>
      </div>

      <div className='text-gray-700'>
        <span>
          <button
            onClick={() =>
              product.selected ? handleRemove(product) : handleAddToCart(product)
            }
            className='bg-transparent outline-none hover:bg-purple-100 text-indigo-700 font-semibold hover:text-indigo py-2 px-4 border border-indigo-500 hover:border-transparent rounded-full'
          >
            <span className='hidden md:block w-32'>
              {product.selected ? 'Remove' : 'Add to cart'}
            </span>
            <span className='sm:block md:hidden'>
              {product.selected ? '-' : '+'}
            </span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default ProductListItem;
