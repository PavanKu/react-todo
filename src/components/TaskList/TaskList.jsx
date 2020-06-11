import React from "react";

import StyledTaskList from "./TaskList.styled";

function TaskList(props) {
  return <StyledTaskList>{props.children}</StyledTaskList>;
}

export default TaskList;
