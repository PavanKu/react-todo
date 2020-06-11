import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import TaskInput from "./TaskInput";
import { DEFAULT_PLACEHOLDER } from "./TaskInput";

const SIMPLE_TASK = "Buy Milk";
const AddTaskWithDefaultValue = () => <TaskInput />;
const AddTaskWithValue = () => <TaskInput value={SIMPLE_TASK} />;
const Playground = () => (
  <TaskInput
    placeholder={text("placeholder", DEFAULT_PLACEHOLDER)}
    value={text("value", SIMPLE_TASK)}
    handleChange={action("TaskInput: handleChange:")}
  />
);

storiesOf("Task Input", module)
  .addDecorator(withKnobs)
  .add("Task Input without value", AddTaskWithDefaultValue)
  .add("Task Input with value", AddTaskWithValue)
  .add("Playground", Playground);
