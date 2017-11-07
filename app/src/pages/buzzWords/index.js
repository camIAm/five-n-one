import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";
import { connect } from "react-redux";

const li = buzz => {
  return <li key={buzz.id}>{buzz.value}</li>;
};

const BuzzWords = props => {
  return (
    <div>
      <h1>BuzzWords</h1>
      <ul>{map(li, props.words)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("mapStateToProps: ", state.buzzWords);
  return { words: state.buzzWords };
};

const connector = connect(mapStateToProps);

export default connector(BuzzWords);
