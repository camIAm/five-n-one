import React from "react";
import Form from "../../components/form";
import { connect } from "react-redux";
import { addCookie, chgCookie } from "../../action-creators/fortune-cookie";

const FortuneCookie = props => {
  return (
    <div>
      <h1>FortuneCookie</h1>
      <Form
        toUrl="/fortune-cookies"
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        {...props.fortuneCookie}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fortuneCookie: state.currentCookie
  };
};

const mapActionsToProps = (dispatch, getState) => {
  return {
    onChange: (field, value) => {
      dispatch(chgCookie(field, value));
    },
    onSubmit: history => cookie => e => {
      e.preventDefault();
      dispatch(addCookie(cookie, history));
    }
  };
};

const connector = connect(mapStateToProps, mapActionsToProps);
export default connector(FortuneCookie);
