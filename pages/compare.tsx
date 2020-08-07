import React, { useReducer, useEffect } from 'react';
import { set, get } from 'idb-keyval';
import { Loader, SiteHeader, SideBar, Title, ProductList } from 'components';
import { reducer, initialState } from 'services/product';
import { Product } from 'interfaces/Product';
import { Layout } from 'containers/Layout';
import { Main } from 'containers/Main';

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
    await set('selectedProducts', selectedProducts);
    dispatch({
      type: 'UPDATE_PRODUCTS_SUCCESS',
      payload: selectedProducts,
    });
  };
  const { products, errorMessage, loading } = state;

  return (
    <Layout>
      <SiteHeader />
      <SideBar>
        <Main>
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
        </Main>
      </SideBar>
    </Layout>
  );
};

export default Compare;
