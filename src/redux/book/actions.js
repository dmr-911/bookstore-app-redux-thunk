import {
  ADD_BOOK,
  DELETE_BOOK,
  LOAD_BOOKS,
  UPDATE_BOOK,
  UPDATE_BOOK_DATA,
} from "./actionTypes";
export const loadedBooks = (books) => {
  return {
    type: LOAD_BOOKS,
    payload: books,
  };
};

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

export const updateBookData = (bookData) => {
  return {
    type: UPDATE_BOOK_DATA,
    payload: bookData,
  };
};
