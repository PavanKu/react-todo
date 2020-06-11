import React from "react";
import PropTypes from "prop-types";
import StyledHeader from "./Header.styled";

export const APPLICATION_DEFAULT_TITLE = "todos";

function Header({ title = APPLICATION_DEFAULT_TITLE }) {
  return <StyledHeader className="appTitle">{title}</StyledHeader>;
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
