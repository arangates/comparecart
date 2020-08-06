import { BOL_CATALOG_URL, DEFAULT_PARAMS } from 'services/globals';

export const initialState = {
  loading: true,
  products: [],
  errorMessage: null,
  loadingMore: false,
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SEARCH_PRODUCTS_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case 'LOAD_MORE':
      return {
        ...state,
        loadingMore: true,
      };
    case 'SEARCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case 'LOAD_MORE_SUCCESS':
      return {
        ...state,
        loadingMore: false,
        products: state.products.concat(action.payload),
      };
    case 'SEARCH_PRODUCTS_FAILURE':
      return {
        ...state,
        loading: false,
        showCompare: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const objectToQueryString = (obj: any) => {
  return Object.keys(obj)
    .map((key) => key + '=' + obj[key])
    .join('&');
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
  let results = await fetcher(newParams);
  dispatch({
    type: 'SEARCH_PRODUCTS_SUCCESS',
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
