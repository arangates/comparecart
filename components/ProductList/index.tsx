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
}

const ProductList = ({ products, showAnalytics, handleAddToCart }: IProps) => {
  return (
    <>
      <h1 className='text-2xl h-10 py-20 text-blue-grey'>Results</h1>
      <div className='ml-10 mr-20 flex justify-between text-gray-600 dark:text-gray-400'>
        {TableHeading.map((heading) => (
          <ProductListHeader key={heading.id} item={heading} />
        ))}
      </div>
      {products.map((product) => (
        <ProductListItem handleAddToCart={handleAddToCart} key={product.id} product={product} />
      ))}
      {showAnalytics ? (
        <Analytics
          name={products.map((item) => item.title)}
          prices={products.map((item) => item.offerData.offers[0].price)}
          ratings={products.map((item) => item.rating)}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default ProductList;
