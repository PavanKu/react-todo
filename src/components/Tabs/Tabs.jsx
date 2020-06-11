import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import StyledTabGrp, { StyledTab } from "./Tabs.styled";
import {
  ARIA_ROLE_TABLIST,
  ARIA_ROLE_TAB,
} from "../../constants/ariaConstants";

export const DEFAULT_OPTIONS = ["All", "Active", "Completed"];

function Tabs({ active, options = DEFAULT_OPTIONS, handleClick }) {
  const [activeOption, setActiveOption] = useState(active);

  const handleTabClick = (value) => {
    if (handleClick && value !== activeOption) {
      handleClick(value);
    }
  };

  useEffect(() => {
    let validOption = active;
    const isValidOption = options.some((option) => option === validOption);
    if (!isValidOption) {
      validOption = options[0];
    }
    setActiveOption(validOption);
  }, [active, options]);

  const finalOptions = useMemo(() => {
    return options.filter((option) => option);
  }, [options]);

  return (
    <StyledTabGrp role={ARIA_ROLE_TABLIST}>
      {finalOptions.map((option) => (
        <StyledTab
          key={option}
          role={ARIA_ROLE_TAB}
          aria-selected={option === activeOption}
          onClick={() => handleTabClick(option)}
          isActive={option === activeOption}
        >
          {option}
        </StyledTab>
      ))}
    </StyledTabGrp>
  );
}

Tabs.propTypes = {
  active: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func,
};

export default Tabs;
