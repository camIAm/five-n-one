import fetch from "isomorphic-fetch";
import { SET_BUZZ_WORDS } from "../constants";
const url = "http://localhost:5000/buzz-words";

export const setBuzzWords = async (dispatch, getState) => {
  const buzzWords = await fetch(url).then(res => res.json());
  console.log("action-creators for buzzWords", buzzWords);
  dispatch({ type: SET_BUZZ_WORDS, payload: buzzWords });
};
