import React from "react";
import Form from "../../components/form";
import { connect } from "react-redux";
import { addStarWars, chgStarWars } from "../../action-creators/starWars";
const StarWarsForm = props => {
  console.log("starWArsForm props:", props);
  return (
    <div>
      <h1>StarWArs</h1>
      <Form
        toUrl="/starwars"
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        {...props.starWars}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    starWars: state.currentStarWars
  };
};

const mapActionsToProps = (dispatch, getState) => {
  return {
    onChange: (field, value) => {
      dispatch(chgStarWars(field, value));
    },
    onSubmit: history => starWars => e => {
      e.preventDefault();
      dispatch(addStarWars(starWars, history));
    }
  };
};

const connector = connect(mapStateToProps, mapActionsToProps);
export default connector(StarWarsForm);
