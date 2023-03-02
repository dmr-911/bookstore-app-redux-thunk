import { addBook } from "../actions";

const addApiBook = (book) => {
  return async (dispatch, state) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const bookResult = await response.json();

    dispatch(addBook(bookResult));
  };
};

export default addApiBook;
