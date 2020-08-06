import React from 'react';
import ProductListHeader from './ProductListHeader';
import ProductListItem from './ProductListItem';
import { Product } from './Product';
import Analytics from 'components/Analytics';
import { TableHeading } from 'services/globals';

interface IProps {
  products: Product[];
  showAnalytics: Boolean;
  handleAddToCart: any;
  handleLoadMore?: any;
}

const ProductList = ({
  products,
  showAnalytics,
  handleAddToCart,
  handleLoadMore,
}: IProps) => {
  return (
    <>
      <h1 className='text-2xl h-10 py-20 text-blue-grey'>Results</h1>
      <div className='ml-10 mr-20 flex justify-between text-gray-600 dark:text-gray-400'>
        {TableHeading.map((heading) => (
          <ProductListHeader key={heading.id} item={heading} />
        ))}
      </div>
      <div className='h-screen/2 overflow-auto'>
        {products.map((product) => (
          <ProductListItem
            handleAddToCart={handleAddToCart}
            key={product.id}
            product={product}
          />
        ))}
      </div>
        {showAnalytics ? (
          ''
        ) : (
          <div className='flex flex-col justify-center py-5 px-16'>
            <button
              type='button'
              onClick={handleLoadMore}
              className='bg-indigo-700 hover:bg-indigo-400 w-30 text-white text-md font-bold rounded-full py-5 px-16'
            >
              Load More
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
  );
};

export default ProductList;
