import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import ClearBtn from "./ClearBtn";

const DefaultClearBtn = () => <ClearBtn />;
const ClearBtnWithCustomLabel = () => <ClearBtn label="Click me" />;
const Playground = () => (
  <ClearBtn
    show={boolean("show", true)}
    label={text("label", "Hire me")}
    handleClear={action("ClearBtn:click:")}
  />
);

storiesOf("Clear Button", module)
  .addDecorator(withKnobs)
  .add("Default Button", DefaultClearBtn)
  .add("Custom Label", ClearBtnWithCustomLabel)
  .add("Playground", Playground);
