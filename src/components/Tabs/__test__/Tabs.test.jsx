import React from "react";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tabs, { DEFAULT_OPTIONS } from "../Tabs";
import {
  ARIA_ROLE_TAB,
  ARIA_TAB_SELECTED_ATTRIBUTE,
} from "../../../constants/ariaConstants";

describe("<Tab />", () => {
  afterEach(cleanup);

  it("should render without crash", () => {
    render(<Tabs />);
  });

  it("should render with default props", () => {
    const { getAllByRole } = render(<Tabs />);
    const tabElementsByRole = getAllByRole(ARIA_ROLE_TAB);
    const selectedTabElement = tabElementsByRole.filter(
      (element) => element.getAttribute(ARIA_TAB_SELECTED_ATTRIBUTE) === "true"
    )[0];

    expect(tabElementsByRole.length).toEqual(DEFAULT_OPTIONS.length);
    expect(selectedTabElement).toHaveTextContent(DEFAULT_OPTIONS[0]);
  });

  it("should render with props", () => {
    const sampleOptions = ["Tab1", "Tab2", "Tab3"];
    const activeOption = "Tab2";
    const { getAllByRole } = render(
      <Tabs options={sampleOptions} active={activeOption} />
    );
    const tabElementsByRole = getAllByRole(ARIA_ROLE_TAB);
    const selectedTabElement = tabElementsByRole.filter(
      (element) => element.getAttribute(ARIA_TAB_SELECTED_ATTRIBUTE) === "true"
    )[0];

    expect(tabElementsByRole.length).toEqual(sampleOptions.length);
    expect(selectedTabElement).toHaveTextContent(activeOption);
  });

  it("should invoke handlers", () => {
    let selectedTab;
    const selectedOption = DEFAULT_OPTIONS[1];
    const { getByText } = render(
      <Tabs handleClick={(tab) => (selectedTab = tab)} />
    );
    const secondtabElement = getByText(selectedOption);

    userEvent.click(secondtabElement);
    expect(selectedTab).toEqual(selectedOption);
  });

  it("should match snapshot", () => {
    const { container } = render(<Tabs />);
    expect(container).toMatchSnapshot();
  });
});
