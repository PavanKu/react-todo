import React from "react";
import PropTypes from "prop-types";
import StyledText from "./RemainingTask.styled";

const DEFAULT_COUNT = 0;
export const NO_ITEM_LEFT = "Hurray! No item left";

function RemainingTask({ count = DEFAULT_COUNT }) {
  let text = NO_ITEM_LEFT;
  if (count && count > 0) {
    text = `${count} ${count > 1 ? "items" : "item"} left`;
  }

  return <StyledText>{text}</StyledText>;
}

RemainingTask.propTypes = {
  count: PropTypes.number,
};

export default RemainingTask;
