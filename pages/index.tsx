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

import {
  reducer,
  initialState,
  fetchProducts,
  syncWithDb,
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
      searchQuery: searchQuery,
    });
    fetchProducts(dispatch, { q: searchQuery });
  };

  const handleLoadMore = () => {
    let currentOffset = products.length;
    dispatch({
      type: 'LOAD_MORE',
      searchQuery: searchQuery,
    });

    if (products.length % 20 === 0) {
      currentOffset = products.length;
    } else {
      currentOffset = Math.ceil((products.length + 1) / 10) * 10;
    }
    fetchProducts(dispatch, {
      q: searchQuery ? searchQuery : 'harry',
      offset: currentOffset,
    });
  };

  const handleAddToCart = async (product: Product) => {
    product.selected = !product.selected;
    const dbResponse: Product[] = (await get(INDEXED_DB_NAME)) || [];
    const selectedProducts = [...dbResponse, ...[product]];
    if(selectedProducts.length>10) {
      return
    }
    await set(INDEXED_DB_NAME, selectedProducts);
    const syncedResults = await syncWithDb(products);
    dispatch({
      type: 'UPDATE_PRODUCTS_SUCCESS',
      payload: syncedResults,
    });
  };

  const handleRemove = async (product: Product) => {
    const dbResponse: Product[] = (await get(INDEXED_DB_NAME)) || [];
    const selectedProducts = dbResponse.filter(
      (item: Product) => item.id !== product.id
    );
    await set('selectedProducts', selectedProducts);
    const syncedResults = await syncWithDb(products);
    dispatch({
      type: 'UPDATE_PRODUCTS_SUCCESS',
      payload: syncedResults,
    });
  };
  const { products, errorMessage, loading, loadingMore, searchQuery } = state;

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
              handleRemove={handleRemove}
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
