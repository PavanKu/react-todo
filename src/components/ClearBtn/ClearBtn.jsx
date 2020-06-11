import React from "react";
import PropTypes from "prop-types";

import StyledBtn from "./ClearBtn.styled";

export const DEFAULT_TEXT = "Clear completed";
export const DEFAULT_SHOW = true;

function ClearBtn({ handleClear, label = DEFAULT_TEXT, show = DEFAULT_SHOW }) {
  const handleClick = () => {
    if (show && handleClear) {
      handleClear();
    }
  };

  return (show && <StyledBtn onClick={handleClick}>{label}</StyledBtn>) || null;
}

ClearBtn.propTypes = {
  handleClear: PropTypes.func,
  label: PropTypes.string,
  show: PropTypes.bool,
};
export default ClearBtn;
