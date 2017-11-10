import fetch from "isomorphic-fetch";
import { SET_BUZZ_WORDS, CHG_CURRENT_WORD } from "../constants";
const url = "http://localhost:5000/buzz-words";

export const addBuzzWord = (history, buzzWord) => async (
  dispatch,
  getState
) => {
  const headers = { "Content-Type": "application/json" };
  const method = "POST";
  const body = JSON.stringify(buzzWord);
  const result = await fetch(url, { headers, method, body });
  if (result.ok) {
    dispatch(setBuzzWords);
    history.push("/buzzwords");
  } else {
  }
};
export const setBuzzWords = async (dispatch, getState) => {
  const buzzWords = await fetch(url).then(res => res.json());
  dispatch({ type: SET_BUZZ_WORDS, payload: buzzWords });
};

export const chgBuzz = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_WORD, payload: { [field]: value } });
};
