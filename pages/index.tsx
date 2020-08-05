import React, { useReducer, useEffect } from 'react';
import { set, get } from 'idb-keyval';

import {
  Loader,
  SiteHeader,
  SideBar,
  Title,
  Search,
  ProductList,
} from 'components';

import { reducer, initialState, fetchProducts } from 'services/product';

const IndexPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    get('selectedProducts').then((db: any) => {
      if (db?.length) {
        dispatch({
          type: 'SEARCH_PRODUCTS_SUCCESS',
          compare: true,
          payload: db,
        });
      } else {
        fetchProducts(dispatch);
      }
    });
  }, []);

  const search = (searchQuery: string) => {
    dispatch({
      type: 'SEARCH_PRODUCTS_REQUEST',
    });

    fetchProducts(dispatch, searchQuery);
  };

  const compareProducts = () => {
    const selectedProducts = products.filter(
      (product: any) => product.selected
    );
    set('selectedProducts', selectedProducts);
    dispatch({
      type: 'SEARCH_PRODUCTS_SUCCESS',
      compare: true,
      payload: selectedProducts,
    });
  };

  const handleAddToCart = (product: any) => {
    const selectedProducts = products.filter(
      (product: any) => product.selected
    );
    if (selectedProducts.length === 10) {
      return;
    }
    product.selected = !product.selected;
    set('selectedProducts', selectedProducts);
    dispatch({
      type: 'SEARCH_PRODUCTS_SUCCESS',
      showCompare: showCompare,
      payload: products.map(
        (obj: any) => [product].find((o) => o.id === obj.id) || obj
      ),
    });
    set('selectedProducts', selectedProducts);
  };
  const { products, errorMessage, loading, showCompare } = state;

  return (
    <>
      <div
        id='app'
        className='min-h-screen bg-white-200 antialiased xl:flex xl:flex-col xl:h-screen'
      >
        <SiteHeader compare={compareProducts} />
        <div className='xl:flex-1 xl:flex xl:overflow-y-hidden'>
          <SideBar />
          <main className='py-1 ml-8 xl:flex-1 xl:overflow-x-hidden'>
            <Title
              htmlFor='search'
              title={showCompare ? 'Compare cart' : 'Search for a product'}
              subTitle={
                showCompare ? `you compare these ${products.length} items` : ''
              }
            />
            {showCompare ? '' : <Search fetchProducts={search} />}

            {loading && !errorMessage ? (
              <Loader />
            ) : errorMessage ? (
              <div className='errorMessage'>{errorMessage}</div>
            ) : (
              <ProductList
                handleAddToCart={handleAddToCart}
                products={products}
                showAnalytics={showCompare}
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
