import { BOL_CATALOG_URL, DEFAULT_PARAMS } from 'services/globals';

export const initialState = {
  loading: true,
  products: [],
  errorMessage: null,
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SEARCH_PRODUCTS_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case 'SHOW_COMPARE':
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case 'SEARCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload,
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

export async function fetchProducts(
  dispatch: React.Dispatch<any>,
  searchQuery?: string
) {
  let params = DEFAULT_PARAMS;
  if (searchQuery) {
    params = { ...DEFAULT_PARAMS, ...{ q: searchQuery } };
  }
  const url: any = BOL_CATALOG_URL + '?' + objectToQueryString(params);

  let response = await fetch(url);
  let results = await response.json();

  dispatch({
    type: 'SEARCH_PRODUCTS_SUCCESS',
    payload: results.products,
  });
}
