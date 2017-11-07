import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { colors } from "./reducers/colors";
import { emojis } from "./reducers/emojis";
import { buzzWords } from "./reducers/buzzWords";
import { cookies } from "./reducers/cookies";
import { starWars } from "./reducers/starWars";

export default createStore(
  combineReducers({
    colors,
    emojis,
    buzzWords,
    cookies,
    starWars
  }),
  applyMiddleware(thunk)
);
