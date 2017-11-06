import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";

const li = e => {
  return <li key={e.id}>{e.value}</li>;
};

function Cookies(props, context) {
  const instance = new React.Component(props, context);
  instance.state = {
    cookies: []
  };
  fetch("http://localhost:5000/fortune-cookie")
    .then(res => res.json())
    .then(cookies => instance.setState({ cookies }));

  instance.render = function() {
    return (
      <div>
        <h1>Cookies</h1>
        <ul>{map(li, this.state.cookies)}</ul>
      </div>
    );
  };
  return instance;
}

export default Cookies;
