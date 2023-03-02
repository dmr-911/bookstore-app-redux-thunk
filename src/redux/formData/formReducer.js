import { LOAD_FORM_DATA, UPDATE_FORM_DATA } from "./actionTypes";
import { initialState } from "./initialState";

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return action.payload;

    case LOAD_FORM_DATA:
      return [];

    default:
      return state;
  }
};

export default formReducer;
