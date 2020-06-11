import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Header, { APPLICATION_DEFAULT_TITLE } from "./Header";

const DefaultHeader = () => <Header />;
const Playground = () => (
  <Header title={text("title", APPLICATION_DEFAULT_TITLE)} />
);

storiesOf("Header", module)
  .addDecorator(withKnobs)
  .add("Default Header", DefaultHeader)
  .add("Playground", Playground);
