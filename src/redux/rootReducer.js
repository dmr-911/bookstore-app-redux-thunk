import { combineReducers } from "redux";
import booksReducer from "./book/booksReducer";
import formReducer from "./formData/formReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  form: formReducer,
});

export default rootReducer;
