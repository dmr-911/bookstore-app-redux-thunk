import { loadDefaultBooks } from "../../search/actions";
import { updateBook } from "../actions";

const updateApiBook = (updatedBook) => {
  return async (dispatch, state) => {
    console.log("i am in");
    const response = await fetch(
      `http://localhost:9000/books/${updatedBook.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updatedBook),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const data = await response.json();

    dispatch(updateBook(data));
  };
};

export default updateApiBook;
