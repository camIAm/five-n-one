import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const li = e => {
  return <li key={e.id}>{e.value}</li>;
};

const StarWars = props => {
  return (
    <div>
      <Link to="/starwars/new">Add starWars</Link>
      <h1>StarWars</h1>
      <ul>{map(li, props.starWars)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("mapStateToProps: ", state);
  return { starWars: state.starWars };
};

const connector = connect(mapStateToProps);
export default connector(StarWars);
