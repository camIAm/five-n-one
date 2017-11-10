import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const li = color => {
  //console.log("colors in li: ", color);
  return (
    <li key={color.id} style={{ color: color.value }}>
      <Link to={`/colors/${color.id}`}>{color.name}</Link>
    </li>
  );
};
const Colors = props => {
  return (
    <div>
      <Link to="/colors/new">Add New Color</Link>
      <h1>Colors</h1>
      <ul>{map(li, props.colors)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { colors: state.colors };
};

const connector = connect(mapStateToProps);

// replace export statement
export default connector(Colors);
