import { LOAD_FORM_DATA, UPDATE_FORM_DATA } from "./actionTypes";

export const updateFormData = (book) => {
  return {
    type: UPDATE_FORM_DATA,
    payload: book,
  };
};

export const loadFormData = () => {
  return {
    type: LOAD_FORM_DATA,
    payload: [],
  };
};
