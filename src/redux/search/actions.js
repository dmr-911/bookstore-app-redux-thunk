import {
  FEATURED_PRODUCT,
  LOAD_DEFAULT_BOOKS,
  REMOVE_SEARCH_PRODUCTS,
  SEARCH_PRODUCT,
} from "./actionTypes";

export const loadDefaultBooks = (books) => {
  return {
    type: LOAD_DEFAULT_BOOKS,
    payload: books,
  };
};

export const featuredProduct = (books) => {
  return {
    type: FEATURED_PRODUCT,
    payload: books,
  };
};

export const removeAllSearchedProducts = () => {
  return {
    type: REMOVE_SEARCH_PRODUCTS,
  };
};

export const searchProduct = (searchText) => {
  return {
    type: SEARCH_PRODUCT,
    payload: searchText,
  };
};
