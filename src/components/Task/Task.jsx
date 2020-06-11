import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import StyledTask, {
  StyledCheckBox,
  StyledTaskLabel,
  StyledTaskDelete,
} from "./Task.styled";

export const DEFAULT_TASK_STATUS = false;
export const DEFAULT_TASK = "";
export const DEFAULT_SHOW_CLOSE = null;

function Task({
  isCompleted = DEFAULT_TASK_STATUS,
  showClose = DEFAULT_SHOW_CLOSE,
  task = DEFAULT_TASK,
  taskId,
  handleDelete,
  handleToggle,
}) {
  const [inputChecked, setInputChecked] = useState(isCompleted);
  const [isCloseVisible, setIsCloseVisible] = useState(showClose);

  useEffect(() => {
    setInputChecked(isCompleted);
  }, [isCompleted]);

  useEffect(() => {
    setIsCloseVisible(showClose);
  }, [showClose]);

  const handleInputChange = (event) => {
    if (handleToggle) {
      const isChecked = event.target.checked;
      setInputChecked(isChecked);
      handleToggle(taskId, isChecked);
    }
  };

  const handleRemove = () => {
    if (handleDelete) {
      handleDelete(taskId);
    }
  };

  const showCloseBtn = () => {
    if (showClose === null && !isCloseVisible) {
      setIsCloseVisible(true);
    }
  };
  const hideCloseBtn = () => {
    if (showClose === null && isCloseVisible) {
      setIsCloseVisible(false);
    }
  };

  return (
    <StyledTask onMouseEnter={showCloseBtn} onMouseLeave={hideCloseBtn}>
      <StyledCheckBox
        id={taskId}
        onChange={handleInputChange}
        isCompleted={inputChecked}
      />
      <StyledTaskLabel isCompleted={inputChecked} htmlFor={taskId}>
        {task}
      </StyledTaskLabel>
      {isCloseVisible && <StyledTaskDelete onClick={handleRemove} />}
    </StyledTask>
  );
}

Task.propTypes = {
  isCompleted: PropTypes.bool,
  task: PropTypes.string,
  taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleDelete: PropTypes.func,
  handleToggle: PropTypes.func,
  showClose: PropTypes.bool,
};

export default Task;
