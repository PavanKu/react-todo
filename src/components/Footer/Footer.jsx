import React from "react";
import PropTypes from "prop-types";

import StyledFooter from "./Footer.styled";

const DEFAULT_FOOTER_SHOW = false;

function Footer({ show = DEFAULT_FOOTER_SHOW, children }) {
  if (!show) return null;
  return <StyledFooter>{children}</StyledFooter>;
}

Footer.propTypes = {
  show: PropTypes.bool,
};

export default Footer;
