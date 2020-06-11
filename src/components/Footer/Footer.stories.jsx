import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import Footer from "./Footer";

const DefaultFooter = () => <Footer show />;
const Playgroud = () => <Footer show={boolean("show", true)} />;

storiesOf("Footer", module)
  .addDecorator(withKnobs)
  .add("Default Footer", DefaultFooter)
  .add("Playground", Playgroud);
