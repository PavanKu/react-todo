import React from "react";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TaskInput, { DEFAULT_PLACEHOLDER, DEFAULT_VALUE } from "../TaskInput";

import { ARIA_ROLE_TEXTBOX } from "../../../constants/ariaConstants";

describe("<TaskInput />", () => {
  afterEach(cleanup);

  it("should render wihtout crashing", () => {
    render(<TaskInput />);
  });

  it("should render with default values", () => {
    const { getByRole, getByPlaceholderText } = render(<TaskInput />);
    const elementByRole = getByRole(ARIA_ROLE_TEXTBOX);
    const elementByPlaceholder = getByPlaceholderText(DEFAULT_PLACEHOLDER);

    expect(elementByRole).toHaveValue(DEFAULT_VALUE);
    expect(elementByPlaceholder).toEqual(elementByRole);
  });

  it("should render as per props", () => {
    const inputValue = "Buy Milk";
    const placeholder = "What do to like to do today?";

    const { getByRole, getByPlaceholderText } = render(
      <TaskInput value={inputValue} placeholder={placeholder} />
    );

    const elementByRole = getByRole(ARIA_ROLE_TEXTBOX);
    const elementByPlaceholder = getByPlaceholderText(placeholder);

    expect(elementByRole).toHaveValue(inputValue);
    expect(elementByRole).toEqual(elementByPlaceholder);
  });

  it("should change value when user types", () => {
    const inputValue = "Buy Bread";
    const { getByRole } = render(<TaskInput handleChange={() => {}} />);

    const elementByRole = getByRole(ARIA_ROLE_TEXTBOX);

    expect(elementByRole).toHaveValue(DEFAULT_VALUE);
    userEvent.type(elementByRole, inputValue);
    expect(elementByRole).toHaveValue(inputValue);
  });

  it("should call change handler with user input", () => {
    const inputValue = "Buy Toy";
    let userInput;

    const { getByRole } = render(
      <TaskInput handleChange={(value) => (userInput = value)} />
    );
    const elementByRole = getByRole(ARIA_ROLE_TEXTBOX);

    expect(userInput).toBeUndefined();
    userEvent.type(elementByRole, inputValue);
    expect(userInput).toStrictEqual(inputValue);
  });

  it("should match snapshot", () => {
    const { container } = render(
      <TaskInput value={DEFAULT_VALUE} placeholder={DEFAULT_PLACEHOLDER} />
    );

    expect(container).toMatchSnapshot();
  });
});
