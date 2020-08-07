import React, { useReducer, useEffect } from 'react';
import { set } from 'idb-keyval';

import {
  Loader,
  SiteHeader,
  SideBar,
  Title,
  Search,
  ProductList,
} from 'components';

import {
  reducer,
  initialState,
  fetchProducts,
  fetchMoreProducts,
} from 'services/product';
import { Product } from 'interfaces/Product';
import { INDEXED_DB_NAME } from 'services/globals';

const MainPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProducts(dispatch);
  }, []);

  const search = (searchQuery: string) => {
    dispatch({
      type: 'SEARCH_PRODUCTS_REQUEST',
    });
    fetchProducts(dispatch, { q: searchQuery });
  };

  const handleLoadMore = () => {
    dispatch({
      type: 'LOAD_MORE',
    });
    fetchMoreProducts(dispatch, { offset: products.length });
  };

  const handleAddToCart = async (product: Product) => {
    product.selected = !product.selected;
    const updatedProducts = products.map(
      (obj: any) => [product].find((o) => o.id === obj.id) || obj
    );
    const selectedProducts = updatedProducts.filter((item: any) => item.selected);
    if(selectedProducts.length >10) {
      return
    }
    await set(INDEXED_DB_NAME, selectedProducts)
      .then(() => {
        dispatch({
          type: 'UPDATE_PRODUCTS_SUCCESS',
          payload: updatedProducts,
        });
      })
      .catch((err) => console.log('It failed!', err));
  };
  const { products, errorMessage, loading, loadingMore } = state;

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
              isLoadingMore={loadingMore}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default MainPage;
