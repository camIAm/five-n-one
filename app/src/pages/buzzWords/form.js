import React from "react";
import Form from "../../components/form";
import { connect } from "react-redux";
import { chgBuzz, addBuzzWord } from "../../action-creators/buzzWords";

const BuzzForm = props => {
  return (
    <div>
      <h1>BuzzForm</h1>
      <Form
        toUrl="/buzzwords"
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        {...props.currentBuzzWord}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { currentBuzzWord: state.currentBuzzWord };
};
const mapActionsToProps = (dispatch, getState) => {
  return {
    onChange: (field, value) => {
      dispatch(chgBuzz(field, value));
    },
    onSubmit: history => buzzWord => e => {
      e.preventDefault();
      console.log("buzzWords:", buzzWord);
      dispatch(addBuzzWord(history, buzzWord));
    }
  };
};
const connector = connect(mapStateToProps, mapActionsToProps);

export default connector(BuzzForm);
