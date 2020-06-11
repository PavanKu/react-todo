import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";

import RemainingTask from "./RemainingTask";

const ZeroTaskLeft = () => <RemainingTask />;

const OneTaskLeft = () => <RemainingTask count={1} />;

const MoreThanOneTaskLeft = () => <RemainingTask count={13} />;

const Playground = () => <RemainingTask count={number("count", 3)} />;

storiesOf("Remaing Item", module)
  .addDecorator(withKnobs)
  .add("Zero Task Left", ZeroTaskLeft)
  .add("One Task Left", OneTaskLeft)
  .add("Multiple Task Left", MoreThanOneTaskLeft)
  .add("Playground", Playground);
