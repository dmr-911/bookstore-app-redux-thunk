import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadBooks from "../redux/book/thunk/loadBooks";
import Book from "./Book";

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks);
  }, [dispatch]);
  return (
    <div className="lws-bookContainer">
      {books.map((book) => (
        <Book key={book?.id} book={book} />
      ))}
    </div>
  );
};

export default Books;
