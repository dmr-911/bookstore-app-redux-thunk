import { combineReducers } from "redux";
import booksReducer from "./book/booksReducer";
import formReducer from "./formData/formReducer";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  form: formReducer,
  search: searchReducer,
});

export default rootReducer;
