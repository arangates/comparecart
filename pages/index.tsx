import React, { useReducer, useEffect } from 'react';
import { set } from 'idb-keyval';
// import Router from 'next/router';

import {
  Loader,
  SiteHeader,
  SideBar,
  Title,
  Search,
  ProductList,
} from 'components';

import { reducer, initialState, fetchProducts, fetchMoreProducts } from 'services/product';

const MainPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProducts(dispatch);
    // get('selectedProducts').then((db: any) => {
    //   if (db?.length > 0) {
    //     Router.push('/compare');
    //   } else {
    //     fetchProducts(dispatch);
    //   }
    // });
  }, []);

  const search = (searchQuery: string) => {
    dispatch({
      type: 'SEARCH_PRODUCTS_REQUEST',
    });
    fetchProducts(dispatch, { q: searchQuery });
  };

  // const compareProducts = () => {
  //   const selectedProducts = products.filter(
  //     (product: any) => product.selected
  //   );
  //   set('selectedProducts', selectedProducts);
  //   dispatch({
  //     type: 'SEARCH_PRODUCTS_SUCCESS',
  //     compare: true,
  //     payload: selectedProducts,
  //   });
  // };

  const handleLoadMore = () => {
    dispatch({
      type: 'LOAD_MORE',
    });
    fetchMoreProducts(dispatch, { offset: products.length });
    console.log('loading more');
  };
  const handleAddToCart = (product: any) => {
    product.selected = !product.selected;
    const selectedProducts = products.filter(
      (product: any) => product.selected
    );
    if (selectedProducts.length === 10) {
      return;
    }
    set('selectedProducts', selectedProducts)
      .then(() =>
        dispatch({
          type: 'SEARCH_PRODUCTS_SUCCESS',
          payload: products.map(
            (obj: any) => [product].find((o) => o.id === obj.id) || obj
          ),
        })
      )
      .catch((err) => console.log('It failed!', err));
  };
  const { products, errorMessage, loading ,loadingMore} = state;

  return (
    <div
      id='app'
      className='min-h-screen bg-white-200 antialiased xl:flex xl:flex-col xl:h-screen'
    >
      <SiteHeader />
      <div className='xl:flex-1 xl:flex xl:overflow-y-hidden'>
        <SideBar />
        <main className='py-1 ml-1 md:ml-8 xl:flex-1'>
          <Title htmlFor='search' title='Search for a product' />
          <Search fetchProducts={search} />

          {loading && !errorMessage ? (
            <Loader />
          ) : errorMessage ? (
            <div className='errorMessage'>{errorMessage}</div>
          ) : (
            <ProductList
              handleAddToCart={handleAddToCart}
              handleLoadMore={handleLoadMore}
              products={products}
              showAnalytics={false}
              isLoadingMore={loadingMore}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default MainPage;
