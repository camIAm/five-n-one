import { SET_STAR_WARS } from "../constants";

export const starWars = (state = [], action) => {
  switch (action.type) {
    case SET_STAR_WARS:
      return action.payload;
    default:
      return state;
  }
};
