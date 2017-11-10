import { SET_STAR_WARS, CHG_CURRENT_STARWARS } from "../constants";
import { merge } from "ramda";
export const starWars = (state = [], action) => {
  switch (action.type) {
    case SET_STAR_WARS:
      return action.payload;
    default:
      return state;
  }
};

export const currentStarWars = (state = "", action) => {
  switch (action.type) {
    case CHG_CURRENT_STARWARS:
      return merge(state, action.payload);
    default:
      return state;
  }
};
