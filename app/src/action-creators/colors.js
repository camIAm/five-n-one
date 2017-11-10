import fetch from "isomorphic-fetch";
import { SET_COLORS, CHG_CURRENT_COLOR, SET_CURRENT_COLOR } from "../constants";

const url = "http://localhost:5000/colors";

export const addColor = (color, history) => async (dispatch, getState) => {
  const headers = { "Content-Type": "application/json" };
  const method = "POST";
  const body = JSON.stringify(color);
  const result = await fetch(url, {
    headers,
    method,
    body
  })
    .then(res => res.json())
    .catch(err => console.log("colors fetch error: ", err));
  if (result.ok) {
    dispatch(setColors);
    history.push("/colors");
  } else {
    // handle error
  }
};

export const chgColor = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_COLOR, payload: { [field]: value } });
};
export const setColors = async (dispatch, getState) => {
  const colors = await fetch(url).then(res => res.json());
  console.log("");
  dispatch({ type: SET_COLORS, payload: colors });
};

export const getColor = id => async (dispatch, getState) => {
  console.log(url + "/" + id);
  const color = await fetch(url + "/" + id).then(res => res.json());
  dispatch({ type: SET_CURRENT_COLOR, payload: color });
};
