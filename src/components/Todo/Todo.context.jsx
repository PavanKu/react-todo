import React, { useReducer, useMemo, useContext } from "react";
import { TAB_OPTIONS } from "../../constants/appConstants";

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SET_STATUS_FILTER = "SET_STATUS_FILTER";

let lastUpdatedId = 0;
const INITIAL_STATE = {
  todos: [],
  activeTab: TAB_OPTIONS.ALL,
};

const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      lastUpdatedId += 1;
      const newTodo = {
        id: lastUpdatedId,
        task: payload.task,
        isCompleted: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => !payload.ids.some((id) => id === todo.id)
        ),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id !== payload.id
            ? todo
            : { ...todo, isCompleted: !todo.isCompleted }
        ),
      };
    case SET_STATUS_FILTER:
      return {
        ...state,
        activeTab: payload.status,
      };
    default:
      throw new Error(`todoReducer: Unsupported action type: ${type}`);
  }
};

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {props.children}
    </TodoContext.Provider>
  );
};

function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within TodoProvider");
  }

  const [state, dispatch] = context;
  const todos = useMemo(() => state.todos, [state]);
  const activeTab = useMemo(() => state.activeTab, [state]);

  function getTodos() {
    return todos;
  }

  function getActiveTab() {
    return activeTab;
  }

  function addTodo(task) {
    dispatch({
      type: ADD_TODO,
      payload: { task },
    });
  }

  function removeTodos(ids) {
    dispatch({
      type: REMOVE_TODO,
      payload: { ids },
    });
  }

  function toggleTodo(id) {
    dispatch({
      type: TOGGLE_TODO,
      payload: { id },
    });
  }

  function filterByStatus(status) {
    dispatch({
      type: SET_STATUS_FILTER,
      payload: { status },
    });
  }

  return {
    getTodos,
    getActiveTab,
    addTodo,
    removeTodos,
    toggleTodo,
    filterByStatus,
  };
}

export { useTodos, TodoProvider };
