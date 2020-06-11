import React from "react";
import { cleanup, render } from "@testing-library/react";

import Footer from "../Footer";

describe("<Footer />", () => {
  afterEach(cleanup);

  it("should render without crash", () => {
    render(<Footer show />);
  });

  it("should hide footer based on props", () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toBeNull();
  });

  it("should match snapshot", () => {
    const { container } = render(<Footer show />);

    expect(container).toMatchSnapshot();
  });
});
