import React from "react";

import StyledTodo, { StyledTodoContainer } from "./Todo.styled";
import { Header } from "../Header";
import { TaskInputContainer } from "../TaskInput";
import { TaskListContainer } from "../TaskList";
import { FooterContainer } from "../Footer";

function Todo({ heading }) {
  return (
    <StyledTodo>
      <StyledTodoContainer>
        <Header title={heading} />
        <TaskInputContainer />
        <TaskListContainer />
        <FooterContainer />
      </StyledTodoContainer>
    </StyledTodo>
  );
}

export default Todo;
