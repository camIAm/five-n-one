import { SET_BUZZ_WORDS } from "../constants";

export const buzzWords = (state = [], action) => {
  console.log("inside buzzWords Reducer", action);
  switch (action.type) {
    case SET_BUZZ_WORDS:
      return action.payload;
    default:
      return state;
  }
};
