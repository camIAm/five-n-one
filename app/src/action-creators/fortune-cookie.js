import fetch from "isomorphic-fetch";
import { SET_COOKIE } from "../constants";
const url = "http://localhost:5000/fortune-cookie";

export const setCookie = async (dispatch, getState) => {
  const cookies = await fetch(url).then(res => res.json());
  console.log("in SetCookes action-creators", cookies);
  dispatch({ type: SET_COOKIE, payload: cookies });
};
