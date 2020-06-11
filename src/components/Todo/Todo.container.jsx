import React from "react";

import { TodoProvider } from "./Todo.context";
import Todo from "./Todo";

const HEADING = "todos";

function TodoContainer() {
  return (
    <TodoProvider>
      <Todo heading={HEADING} />
    </TodoProvider>
  );
}

export default TodoContainer;
