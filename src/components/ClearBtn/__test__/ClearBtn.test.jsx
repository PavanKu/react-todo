import React from "react";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ClearBtn, { DEFAULT_TEXT } from "../ClearBtn";
import { ARIA_ROLE_BUTTON } from "../../../constants/ariaConstants";

describe("<ClearBtn />", () => {
  afterEach(cleanup);

  it("should render without crash", () => {
    render(<ClearBtn />);
  });

  it("should render with default props", () => {
    const { getByRole } = render(<ClearBtn />);
    const elementByRole = getByRole(ARIA_ROLE_BUTTON);

    expect(elementByRole).toHaveTextContent(DEFAULT_TEXT);
  });

  it("should render with custom label", () => {
    const sampleLabel = "Click me";
    const { getByRole } = render(<ClearBtn label={sampleLabel} />);
    const elementByRole = getByRole(ARIA_ROLE_BUTTON);

    expect(elementByRole).toHaveTextContent(sampleLabel);
  });

  it("should hide button based on props", () => {
    const { container } = render(<ClearBtn show={false} />);
    const btnElement = container.querySelector("button");

    expect(btnElement).toBeNull();
  });

  it("should invoke handler", () => {
    let handlerInvoked = false;
    const { getByRole } = render(
      <ClearBtn handleClear={() => (handlerInvoked = true)} />
    );
    const elementByRole = getByRole(ARIA_ROLE_BUTTON);

    userEvent.click(elementByRole);

    expect(handlerInvoked).toStrictEqual(true);
  });

  it("should match snapshot", () => {
    const { container } = render(<ClearBtn show label={"Click me"} />);
    expect(container).toMatchSnapshot();
  });
});
