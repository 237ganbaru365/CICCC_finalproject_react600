import * as t from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  favoriteList: [],
};

const main = (state = initialState, action) => {
  switch (action.type) {
    // case HYDRATE:
    //   return { ...state, ...action.payload };
    case t.ADD_FAV:
      return {
        favoriteList: [...state.favoriteList, action.payload],
      };
    case t.REMOVE_FAV:
      const updatedFavoriteList = Array.from(state.favoriteList);
      return {
        favoriteList: [
          ...updatedFavoriteList.filter(
            (meetup) => meetup.id !== action.payload
          ),
        ],
      };
    default:
      return { ...state };
  }
};

export default main;
