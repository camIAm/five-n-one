import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { emojis, currentEmoji } from "./reducers/emojis";
import { buzzWords, currentBuzzWord } from "./reducers/buzzWords";
import { cookies, currentCookie } from "./reducers/cookies";
import { starWars, currentStarWars } from "./reducers/starWars";
import { colors, currentColor } from "./reducers/colors";

export default createStore(
  combineReducers({
    emojis,
    currentEmoji,
    buzzWords,
    currentBuzzWord,
    cookies,
    starWars,
    currentStarWars,
    colors,
    currentColor,
    currentCookie
  }),
  applyMiddleware(thunk)
);
