import React from "react";
import { map } from "ramda";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const li = e => {
  console.log("li function for emo: ", e);
  return <li key={e.id}>{e.value}</li>;
};

const Emojis = props => {
  return (
    <div>
      <Link to="/emojis/new">Add Emoji</Link>
      <h1>Emojis</h1>
      <ul>{map(li, props.emojis)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { emojis: state.emojis };
};
const connector = connect(mapStateToProps);
export default connector(Emojis);
