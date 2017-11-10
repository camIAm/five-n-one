import fetch from "isomorphic-fetch";
import { SET_STAR_WARS, CHG_CURRENT_STARWARS } from "../constants";
const url = "http://localhost:5000/starwars";

export const setStarWars = async (dispatch, getState) => {
  const items = await fetch(url).then(res => res.json());
  dispatch({ type: SET_STAR_WARS, payload: items });
};

export const addStarWars = (starWars, history) => {
  console.log("inside addStarWars");
  return async (dispatch, getState) => {
    const method = "POST";
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify(starWars);

    const result = await fetch(url, {
      headers,
      method,
      body
    })
      .then(res => res.json())
      .catch(err => console.log("err in starWars :", err));

    if (result.ok) {
      dispatch(setStarWars);
      console.log("about to push Starwars");
      history.push("/starwars");
    } else {
    }
  };
};

export const chgStarWars = (field, value) => (dispatch, getState) => {
  dispatch({
    type: CHG_CURRENT_STARWARS,
    payload: {
      [field]: value
    }
  });
};
