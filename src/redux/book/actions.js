import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "./actionTypes";

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};

export const deleteBook = (bookId) => {
  return {
    type: DELETE_BOOK,
    payload: bookId,
  };
};

export const updateBook = (bookId, newUpdatedBook) => {
  return {
    type: UPDATE_BOOK,
    payload: {
      id: bookId,
      updatedBook: newUpdatedBook,
    },
  };
};
