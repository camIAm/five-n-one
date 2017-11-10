import { SET_BUZZ_WORDS, CHG_CURRENT_WORD } from "../constants";
import { merge } from "ramda";

export const buzzWords = (state = [], action) => {
  switch (action.type) {
    case SET_BUZZ_WORDS:
      return action.payload;
    default:
      return state;
  }
};

export const currentBuzzWord = (state = "", action) => {
  switch (action.type) {
    case CHG_CURRENT_WORD:
      return merge(state, action.payload);
    default:
      return state;
  }
};
