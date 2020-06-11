import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Tabs from "./Tabs";

const sampleOptions = ["Tab1", "Tab2", "Tab3"];
const activeOption = "Tab2";

const DefaultTabs = () => <Tabs />;
const TabsWithCustomActive = () => (
  <Tabs active={activeOption} options={sampleOptions} />
);
const Playground = () => (
  <Tabs
    active={select("active", sampleOptions)}
    options={object("options", sampleOptions)}
    handleClick={action("Tabs:Click:")}
  />
);

storiesOf("Tabs", module)
  .addDecorator(withKnobs)
  .add("Default Tab", DefaultTabs)
  .add("Custom Tab", TabsWithCustomActive)
  .add("Playground", Playground);
