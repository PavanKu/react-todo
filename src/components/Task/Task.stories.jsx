import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Task from "./Task";

const SAMPLE_TASK = "Buy Milk";

const IncompleteTask = () => (
  <Task task={SAMPLE_TASK} taskId="0" showClose={false} />
);
const CompletedTask = () => (
  <Task task={SAMPLE_TASK} taskId="0" isCompleted={true} showClose={false} />
);

const OnHoveTask = () => (
  <Task task={SAMPLE_TASK} taskId="0" isCompleted={true} />
);
const HoveredTask = () => (
  <Task task={SAMPLE_TASK} taskId="0" isCompleted={true} showClose />
);
const Playground = () => (
  <Task
    task={text("task", SAMPLE_TASK)}
    taskId="1"
    isCompleted={boolean("isCompleted", true)}
    showClose={boolean("showClose", true)}
    handleDelete={action("Task:handleDelete:")}
    handleToggle={action("Task:handleToggle:")}
  />
);
storiesOf("Task", module)
  .addDecorator(withKnobs)
  .add("Incomplete Task", IncompleteTask)
  .add("Completed Task", CompletedTask)
  .add("On Hovered Task", OnHoveTask)
  .add("Hovered Task", HoveredTask)
  .add("Playground", Playground);
