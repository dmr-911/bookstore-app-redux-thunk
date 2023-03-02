import { deleteBook } from "../actions";

const deleteApiBook = (bookId) => {
  return async (dispatch, state) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json, charset=utf-8",
      },
    });
    console.log(response);

    // dispatch(deleteBook(bookId));
  };
};

export default deleteApiBook;
