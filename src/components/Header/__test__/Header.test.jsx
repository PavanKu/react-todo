import React from "react";
import { cleanup, render } from "@testing-library/react";
import Header, { APPLICATION_DEFAULT_TITLE } from "../Header";
import { ARIA_ROLE_HEADING } from "../../../constants/ariaConstants";

describe("<Header />", () => {
  afterEach(cleanup);

  it("should render without crashing", () => {
    render(<Header />);
  });

  it("should render with default title", () => {
    const { getByRole } = render(<Header />);
    const elementByRole = getByRole(ARIA_ROLE_HEADING);

    expect(elementByRole).toHaveTextContent(APPLICATION_DEFAULT_TITLE);
  });

  it("should render as per props", () => {
    const APP_TITLE = "Hello World";

    const { getByRole } = render(<Header title={APP_TITLE} />);
    const elementByRole = getByRole(ARIA_ROLE_HEADING);

    expect(elementByRole).toHaveTextContent(APP_TITLE);
  });

  it("should match snapshot", () => {
    const { container } = render(<Header title={APPLICATION_DEFAULT_TITLE} />);
    expect(container).toMatchSnapshot();
  });
});
