import fetch from "isomorphic-fetch";
import { SET_STAR_WARS } from "../constants";
const url = "http://localhost:5000/starwars";

export const setStarWars = async (dispatch, getState) => {
  const items = await fetch(url).then(res => res.json());
  dispatch({ type: SET_STAR_WARS, payload: items });
};
