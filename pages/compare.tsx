import React, { useReducer, useEffect } from 'react';
import { set, get } from 'idb-keyval';
import { Loader, SiteHeader, SideBar, Title, ProductList } from 'components';
import { reducer, initialState } from 'services/product';
import { Product } from 'interfaces/Product';

const Compare = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    get('selectedProducts').then((db: any) => {
      dispatch({
        type: 'UPDATE_PRODUCTS_SUCCESS',
        compare: true,
        payload: db ? db : [],
      });
    });
  }, []);

  const handleRemove = async (product: Product) => {
    const selectedProducts = products.filter(
      (item: Product) => item.id !== product.id
    );
    await set('selectedProducts', selectedProducts)
      .then(() =>
        dispatch({
          type: 'UPDATE_PRODUCTS_SUCCESS',
          payload: selectedProducts,
        })
      )
      .catch((err) => console.log('It failed!', err));
  };
  const { products, errorMessage, loading } = state;

  return (
    <div
      id='app'
      className='min-h-screen bg-white-200 antialiased xl:flex xl:flex-col xl:h-screen'
    >
      <SiteHeader />
      <div className='xl:flex-1 xl:flex xl:overflow-y-hidden'>
        <SideBar />
        <main className='py-1 ml-1 md:ml-8 xl:flex-1 xl:overflow-x-hidden'>
          <Title
            htmlFor='search'
            title='Compare cart'
            subTitle={`you compare these ${products?.length} items`}
          />
          {loading && !errorMessage ? (
            <Loader />
          ) : errorMessage ? (
            <div className='errorMessage'>{errorMessage}</div>
          ) : (
            <ProductList
              handleRemove={handleRemove}
              products={products}
              showAnalytics={true}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Compare;
