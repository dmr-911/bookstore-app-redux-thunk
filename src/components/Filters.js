import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  featuredProduct,
  removeAllSearchedProducts,
} from "../redux/search/actions";

const Filters = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  // featured handler
  const handleFeatured = () => {
    setActive((prev) => !prev);
  };

  // useEffect
  useEffect(() => {
    if (active && books?.length) {
      dispatch(featuredProduct(books));
    } else {
      dispatch(removeAllSearchedProducts());
    }
  }, [active, dispatch, books]);

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>
      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn ${!active && "active-filter"}`}
          id="lws-filterAll"
          onClick={handleFeatured}
        >
          All
        </button>
        <button
          className={`filter-btn ${active && "active-filter"}`}
          id="lws-filterFeatured"
          onClick={handleFeatured}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default Filters;
