import { loadDefaultBooks } from "../../search/actions";
import { loadedBooks } from "../actions";

const loadBooks = async (dispatch, state) => {
  const response = await fetch("http://localhost:9000/books");

  const books = await response.json();

  dispatch(loadedBooks(books));
  dispatch(loadDefaultBooks(books));
};

export default loadBooks;
