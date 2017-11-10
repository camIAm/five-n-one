import React from "react";
import Form from "../../components/form";
import { connect } from "react-redux";
import { addEmoji, chgEmoji } from "../../action-creators/emojis";

export const EmojiForm = props => {
  return (
    <div>
      <h1>EmojiForm</h1>
      <Form
        toUrl="/emojis"
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        {...props.currentEmoji}
      />
    </div>
  );
};

const mapStateToProps = state => {
  //console.log("mapStateToProps", state);
  return {
    currentEmoji: state.currentEmoji
  };
};

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgEmoji(field, value));
    },
    onSubmit: history => emoji => e => {
      e.preventDefault();
      dispatch(addEmoji(emoji, history));
    }
  };
};
const connector = connect(mapStateToProps, mapActionsToProps);

export default connector(EmojiForm);
