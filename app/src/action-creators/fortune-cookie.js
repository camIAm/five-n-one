import fetch from "isomorphic-fetch";
import { SET_COOKIE, CNG_COOKIES } from "../constants";
const url = "http://localhost:5000/fortune-cookie";

export const setCookie = async (dispatch, getState) => {
  const cookies = await fetch(url).then(res => res.json());
  console.log("in SetCookes action-creators", cookies);
  dispatch({ type: SET_COOKIE, payload: cookies });
};

export const addCookie = (cookies, history) => async (dispatch, getState) => {
  const method = "POST";
  const headers = { "Content-Type": "application/json" };
  const body = JSON.stringify(cookies);

  const result = await fetch(url, {
    headers,
    method,
    body
  })
    .then(res => res.json())
    .catch(err => console.log("err in cookies :", err));

  if (result.ok) {
    dispatch(setCookie);
    history.push("/fortune-cookies");
  } else {
  }
};

export const chgCookie = (field, value) => (dispatch, getState) => {
  dispatch({ type: CNG_COOKIES, payload: { [field]: value } });
};
