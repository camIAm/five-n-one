import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";

const li = e => {
  return <li key={e.id}>{e.value}</li>;
};

function StarWars(props, context) {
  const instance = new React.Component(props, context);
  instance.state = {
    starWars: []
  };
  fetch("http://localhost:5000/starwars")
    .then(res => res.json())
    .then(starWars => instance.setState({ starWars }));

  instance.render = function() {
    return (
      <div>
        <h1>StarWars</h1>
        <ul>{map(li, this.state.starWars)}</ul>
      </div>
    );
  };
  return instance;
}

export default StarWars;
