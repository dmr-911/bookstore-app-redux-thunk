import { ADD_BOOK, DELETE_BOOK, LOAD_BOOKS, UPDATE_BOOK } from "./actionTypes";
import { initialState } from "./initialState";

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
