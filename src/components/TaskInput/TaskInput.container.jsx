import React from "react";

import { useTodos } from "../Todo";
import TaskInput from "./TaskInput";

function TaskInputContainer() {
  const { addTodo } = useTodos();
  return <TaskInput handleOnEnter={(task) => addTodo(task)} />;
}

export default TaskInputContainer;
