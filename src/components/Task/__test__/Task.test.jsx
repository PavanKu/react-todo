import React from "react";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Task, { DEFAULT_TASK, DEFAULT_TASK_STATUS } from "../Task";
import {
  ARIA_ROLE_CHECKBOX,
  ARIA_ROLE_BUTTON,
} from "../../../constants/ariaConstants";

describe("<Task />", () => {
  afterEach(cleanup);

  it("should render without crash", () => {
    render(<Task taskId="1" />);
  });

  it("should render with default props", () => {
    const { getByRole, getByLabelText } = render(<Task taskId="1" />);

    const checkboxElement = getByRole(ARIA_ROLE_CHECKBOX);
    const labelElement = getByLabelText(DEFAULT_TASK);

    expect(labelElement).toBeDefined();
    expect(checkboxElement.checked).toEqual(DEFAULT_TASK_STATUS);
  });

  it("should render with props", () => {
    const sampleTask = "Buy Milk";
    const { getByRole, getByLabelText } = render(
      <Task taskId="1" isCompleted showClose task={sampleTask} />
    );

    const checkboxElement = getByRole(ARIA_ROLE_CHECKBOX);
    const labelElement = getByLabelText(sampleTask);
    const closeBtnElement = getByRole(ARIA_ROLE_BUTTON);

    expect(labelElement).toBeDefined();
    expect(checkboxElement.checked).toEqual(true);
    expect(closeBtnElement).toBeDefined();
  });

  it("should invoke toggle handlers", () => {
    let taskIdFromToggle, taskStatusFromToggle;
    const sampleTask = "Buy Milk";
    const selectionChange = (id, status) => {
      taskIdFromToggle = id;
      taskStatusFromToggle = status;
    };
    const { getByRole, getByLabelText } = render(
      <Task
        taskId="1"
        showClose
        task={sampleTask}
        handleToggle={selectionChange}
      />
    );

    const checkboxElement = getByRole(ARIA_ROLE_CHECKBOX);
    const labelElement = getByLabelText(sampleTask);

    userEvent.click(checkboxElement);
    expect(taskIdFromToggle).toEqual("1");
    expect(taskStatusFromToggle).toEqual(true);

    userEvent.click(labelElement);
    expect(taskIdFromToggle).toEqual("1");
    expect(taskStatusFromToggle).toEqual(false);
  });

  it("should invoke delete handler", () => {
    let taskIdFromDelete;
    const sampleTask = "Buy Milk";

    const deleteTask = (id) => (taskIdFromDelete = id);
    const { getByRole } = render(
      <Task taskId="1" showClose task={sampleTask} handleDelete={deleteTask} />
    );

    const closeBtnElement = getByRole(ARIA_ROLE_BUTTON);

    userEvent.click(closeBtnElement);
    expect(taskIdFromDelete).toEqual("1");
  });

  it("should match snapshot", () => {
    const sampleTask = "Buy Milk";
    const { container } = render(
      <Task taskId="1" isCompleted showClose task={sampleTask} />
    );

    expect(container).toMatchSnapshot();
  });
});
