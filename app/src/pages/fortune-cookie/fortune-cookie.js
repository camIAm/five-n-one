import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";
import { connect } from "react-redux";

const li = e => {
  return <li key={e.id}>{e.value}</li>;
};

const Cookies = props => {
  return (
    <div>
      <h1>Cookies</h1>
      <ul>{map(li, props.cookies)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cookies: state.cookies
  };
};
const connector = connect(mapStateToProps);

export default connector(Cookies);
