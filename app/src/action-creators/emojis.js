import fetch from "isomorphic-fetch";
import { SET_EMOJIS } from "../constants";
const url = "http://localhost:5000/emojis";

export const setEmojis = async (dispatch, getState) => {
  const emojis = await fetch(url).then(res => res.json());
  console.log("from emojis action-c: ", emojis);
  dispatch({ type: SET_EMOJIS, payload: emojis });
};
