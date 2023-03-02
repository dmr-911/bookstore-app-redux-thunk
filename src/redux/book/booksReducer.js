import { ADD_BOOK, DELETE_BOOK, LOAD_BOOKS, UPDATE_BOOK } from "./actionTypes";
import { initialState } from "./initialState";

const newId = (products) => {
  const max = products.reduce((a, b) => Math.max(b.id, a), -1);
  return max + 1;
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.payload;

    case ADD_BOOK:
      break;

    case UPDATE_BOOK:
      return;

    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default booksReducer;
