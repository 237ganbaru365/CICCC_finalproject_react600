import * as t from "../types";

export const addFavAction = (id) => {
  return {
    type: t.ADD_FAV,
    payload: id,
  };
};

export const removeFavAction = (id) => {
  return {
    type: t.REMOVE_FAV,
    payload: id,
  };
};
