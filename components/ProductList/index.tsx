import React from 'react';
import { Product } from 'interfaces/Product';
import ProductListHeader from './ProductListHeader';
import ProductListItem from './ProductListItem';
import Analytics from 'components/Analytics';
import { TableHeading } from 'services/globals';
import Link from 'next/link';

interface IProps {
  products: Product[];
  showAnalytics?: boolean;
  handleAddToCart?: any;
  handleRemove?: any;
  handleLoadMore?: any;
  isLoadingMore?: boolean;
}

const ProductList = ({
  products,
  showAnalytics = false,
  handleAddToCart,
  handleRemove,
  handleLoadMore,
  isLoadingMore,
}: IProps) => {
  return products?.length ? (
    <>
      <h1 className='text-2xl h-6 py-5 md:pt-16 text-gray-800'>Results</h1>
      <div className='pt-8 mr-32 flex justify-between text-gray-600 dark:text-gray-400'>
        {TableHeading.map((heading) => (
          <ProductListHeader key={heading.id} item={heading} />
        ))}
      </div>
      <div
        className={`h-screen/2 overflow-auto ${
          showAnalytics ? '' : '-ml-8'
        } md:mt-5`}
      >
        {products.map((product, index) => (
          <ProductListItem
            handleAddToCart={handleAddToCart}
            handleRemove={handleRemove}
            key={product.id}
            product={product}
            index={index}
            showAnalytics={showAnalytics}
          />
        ))}
      </div>
      {showAnalytics ? (
        ''
      ) : (
        <div className='flex items-center justify-center md:py-5 px-16'>
          <button
            type='button'
            disabled={isLoadingMore}
            onClick={handleLoadMore}
            className='flex bg-indigo-700 hover:bg-indigo-400 md:w-30 text-white text-md font-bold rounded-full py-2 md:py-4 px-20'
          >
            {isLoadingMore ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
              >
                <circle
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                  className='opacity-25'
                ></circle>
                <path
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  className='opacity-75'
                ></path>
              </svg>
            ) : (
              ''
            )}
            {isLoadingMore ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
      {showAnalytics ? (
        <Analytics
          prices={products.map((product) => {
            return {
              name: product.title,
              val: product.offerData.offers[0].price,
            };
          })}
          ratings={products.map((product) => {
            return {
              name: product.title,
              val: product.rating,
            };
          })}
        />
      ) : (
        ''
      )}
    </>
  ) : (
    <div className='flex h-screen/2'>
      <div className='m-auto'>
        <h1 className='text-gray-600 text-2xl h-10 dark:text-gray-400'>
          Please add items to cart
        </h1>
        <Link href='/'>
          <button
            type='submit'
            className='mt-8 md:mt-0 bg-indigo-700 hover:bg-indigo-400 text-white font-bold rounded-full ml-5 py-3 px-16'
          >
            Add now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
