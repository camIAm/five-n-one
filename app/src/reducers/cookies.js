import { SET_COOKIE, CNG_COOKIES } from "../constants";

export const cookies = (state = [], action) => {
  switch (action.type) {
    case SET_COOKIE:
      return action.payload;
    default:
      return state;
  }
};

export const currentCookie = (state = "", action) => {
  switch (action.type) {
    case CNG_COOKIES:
      return action.payload;
    default:
      return state;
  }
};
