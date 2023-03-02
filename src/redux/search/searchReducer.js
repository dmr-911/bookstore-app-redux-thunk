import {
  FEATURED_PRODUCT,
  LOAD_DEFAULT_BOOKS,
  REMOVE_SEARCH_PRODUCTS,
  SEARCH_PRODUCT,
  SEARCH_TEXT,
} from "./actionTypes";
import initialState from "./initialState";

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DEFAULT_BOOKS:
      return {
        ...state,
        books: [...action.payload],
      };

    case FEATURED_PRODUCT:
      return {
        ...state,
        searchedBooks: action.payload.filter((book) => book.featured),
      };

    case REMOVE_SEARCH_PRODUCTS:
      return {
        ...state,
        searchedBooks: [],
      };

    case SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        searchedBooks: state.books.filter((book) =>
          book.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    default:
      return state;
  }
};

export default searchReducer;
