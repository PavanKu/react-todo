import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import StyledTaskInput from "./TaskInput.styled";

export const DEFAULT_VALUE = "";
export const DEFAULT_PLACEHOLDER = "What needs to be done?";

function TaskInput({
  value = DEFAULT_VALUE,
  placeholder = DEFAULT_PLACEHOLDER,
  handleChange,
  handleOnEnter,
}) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputValue(text);
    if (handleChange) {
      handleChange(text);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (handleOnEnter) {
      handleOnEnter(inputValue);
      setInputValue(DEFAULT_VALUE);
    }
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <form onSubmit={handleFormSubmit}>
      <StyledTaskInput
        name="task-input"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </form>
  );
}

TaskInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  handleOnEnter: PropTypes.func,
};

export default TaskInput;
