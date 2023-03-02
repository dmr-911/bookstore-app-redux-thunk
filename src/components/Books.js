import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadBooks from "../redux/book/thunk/loadBooks";
import { loadDefaultBooks } from "../redux/search/actions";
import Book from "./Book";

const Books = () => {
  const books = useSelector((state) => state.books);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks);
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadDefaultBooks(books));
  }, [books, dispatch]);

  return (
    <div className="lws-bookContainer">
      {/* {books.map((book) => (
        <Book key={book?.id} book={book} />
      ))} */}

      {search?.searchedBooks?.length
        ? search?.searchedBooks?.map((book) => (
            <Book key={book.id} book={book} />
          ))
        : books.map((book) => <Book key={book.id} book={book} />)}
    </div>
  );
};

export default Books;
