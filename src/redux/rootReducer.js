import { combineReducers } from "redux";
import booksReducer from "./book/booksReducer";

const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;
