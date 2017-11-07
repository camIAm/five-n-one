import React from "react";
//import { render } from "react-dom";
import ReactDOM from "react-dom";
import "tachyons";
import { Provider } from "react-redux";
import store from "./store";

import { setColors } from "./action-creators/colors";
import { setEmojis } from "./action-creators/emojis";
import { setBuzzWords } from "./action-creators/buzzWords";
import { setCookie } from "./action-creators/fortune-cookie";
import { setStarWars } from "./action-creators/starWars";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// we can also initialize our lists here:
store.dispatch(setColors);
store.dispatch(setEmojis);
store.dispatch(setBuzzWords);
store.dispatch(setCookie);
store.dispatch(setStarWars);
