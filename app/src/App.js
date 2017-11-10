import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Colors from "./pages/colors/index";
import ShowColor from "./pages/colors/show";
import BuzzWords from "./pages/buzzWords/index";
import Emojis from "./pages/emojis/index";
import Cookies from "./pages/fortune-cookie/index";
import StarWars from "./pages/starWars/index";
import ColorForm from "./pages/colors/form";
import BuzzForm from "./pages/buzzWords/form";
import EmojiForm from "./pages/emojis/form";
import FortuneCookie from "./pages/fortune-cookie/form";
import StarWarsForm from "./pages/starWars/form";

const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">BuzzWords</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/fortune-cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  );
};

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/colors/:id" component={ShowColor} />
          <Route path="/colors/new" component={ColorForm} />
          <Route path="/buzzWords/new" component={BuzzForm} />
          <Route path="/colors" component={Colors} />
          <Route path="/buzzWords" component={BuzzWords} />
          <Route path="/emojis/new" component={EmojiForm} />
          <Route path="/emojis" component={Emojis} />
          <Route path="/fortune-cookies/new" component={FortuneCookie} />
          <Route path="/fortune-cookies" component={Cookies} />
          <Route path="/starwars/new" component={StarWarsForm} />
          <Route path="/starwars" component={StarWars} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
