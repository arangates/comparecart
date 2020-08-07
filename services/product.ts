import { BOL_CATALOG_URL, DEFAULT_PARAMS } from 'services/globals';
import { objectToQueryString } from './utils';

export const initialState = {
  loading: true,
  products: [],
  searchQuery: '',
  errorMessage: null,
  loadingMore: false
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SEARCH_PRODUCTS_REQUEST':
      return {
        ...state,
        loading: true,
        searchQuery: action.searchQuery,
        errorMessage: null,
      };
    case 'LOAD_MORE':
      return {
        ...state,
        loadingMore: true,
      };
    case 'UPDATE_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case 'LOAD_MORE_SUCCESS':
      return {
        ...state,
        loadingMore: false,
        products: [...state.products, ...action.payload],
      };
    case 'SEARCH_PRODUCTS_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

export async function fetcher(newParams?: object) {
  let params = DEFAULT_PARAMS;
  if (newParams) {
    params = { ...DEFAULT_PARAMS, ...newParams };
  }
  const url: any = BOL_CATALOG_URL + '?' + objectToQueryString(params);

  let response = await fetch(url);
  return response.json();
}

export async function fetchProducts(
  dispatch: React.Dispatch<any>,
  newParams?: object
) {
  const results = await fetcher(newParams);

  dispatch({
    type: 'UPDATE_PRODUCTS_SUCCESS',
    payload: results.products,
  });
}

export async function fetchMoreProducts(
  dispatch: React.Dispatch<any>,
  newParams?: object
) {
  let results = await fetcher(newParams);
  dispatch({
    type: 'LOAD_MORE_SUCCESS',
    payload: results.products,
  });
}
