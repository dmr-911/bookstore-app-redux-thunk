import { loadedBooks } from "../actions";

const loadBooks = async (dispatch, state) => {
  const response = await fetch("http://localhost:9000/books");

  const books = await response.json();

  dispatch(loadedBooks(books));
};

export default loadBooks;
