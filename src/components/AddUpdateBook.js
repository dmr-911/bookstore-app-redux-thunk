import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addApiBook from "../redux/book/thunk/addApiBook";

const initialBookData = {
  name: "",
  author: "",
  thumbnail: "",
  price: "",
  rating: "",
  featured: true,
};

const AddUpdateBook = () => {
  const [bookData, setBookData] = useState(initialBookData);
  const dispatch = useDispatch();

  const handleBookSubmit = async (e) => {
    e.preventDefault();
    // dispatch thunk function
    dispatch(addApiBook(bookData));

    // set initial state
    setBookData(initialBookData);
  };
  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={handleBookSubmit}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={bookData.name}
            onChange={(e) =>
              setBookData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={bookData.author}
            onChange={(e) =>
              setBookData((prev) => ({ ...prev, author: e.target.value }))
            }
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={bookData.thumbnail}
            onChange={(e) =>
              setBookData((prev) => ({ ...prev, thumbnail: e.target.value }))
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={bookData.price}
              onChange={(e) =>
                setBookData((prev) => ({ ...prev, price: e.target.value }))
              }
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min={1}
              max={5}
              value={bookData.rating}
              onChange={(e) =>
                setBookData((prev) => ({ ...prev, rating: e.target.value }))
              }
            />
          </div>
        </div>
        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            value={bookData.featured}
            onChange={(e) =>
              setBookData((prev) => ({ ...prev, featured: !bookData.featured }))
            }
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>
        <button type="submit" className="submit" id="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddUpdateBook;
