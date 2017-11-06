import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";

const li = buzz => {
  return <li key={buzz.id}>{buzz.value}</li>;
};

function BuzzWords(props, context) {
  const instance = new React.Component(props, context);
  instance.state = {
    words: []
  };
  fetch("http://localhost:5000/buzz-words")
    .then(res => res.json())
    .then(words => instance.setState({ words }));

  instance.render = function() {
    return (
      <div>
        <h1>BuzzWords</h1>
        <ul>{map(li, this.state.words)}</ul>
      </div>
    );
  };
  return instance;
}
export default BuzzWords;
