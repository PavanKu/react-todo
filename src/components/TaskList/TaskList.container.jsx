import React, { useMemo } from "react";

import { useTodos } from "../Todo";
import TaskList from "./TaskList";
import { Task } from "../Task";
import { TAB_OPTIONS } from "../../constants/appConstants";

function TaskListContainer() {
  const { getTodos, getActiveTab, toggleTodo, removeTodos } = useTodos();
  const todos = getTodos();

  const activeTab = getActiveTab();

  const filteredTodos = useMemo(() => {
    switch (activeTab) {
      case TAB_OPTIONS.ALL:
        return todos;
      case TAB_OPTIONS.COMPLETED:
        return todos.filter((todo) => todo.isCompleted);
      case TAB_OPTIONS.ACTIVE:
        return todos.filter((todo) => !todo.isCompleted);
      default:
        return todos;
    }
  }, [activeTab, todos]);
  if (todos.length === 0) return null;
  return (
    <TaskList>
      {filteredTodos.map((todo) => (
        <Task
          key={todo.id}
          taskId={todo.id}
          task={todo.task}
          isCompleted={todo.isCompleted}
          handleToggle={(id, status) => toggleTodo(id, status)}
          handleDelete={(id) => removeTodos([id])}
        />
      ))}
    </TaskList>
  );
}

export default TaskListContainer;
