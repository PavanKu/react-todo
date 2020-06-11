import React from "react";
import { cleanup, render } from "@testing-library/react";

import RemainingTask, { NO_ITEM_LEFT } from "../RemainingTask";

describe("<RemainingTask />", () => {
  afterEach(cleanup);

  it("should render without crash", () => {
    render(<RemainingTask />);
  });

  it("should render with default props", () => {
    const { getByText } = render(<RemainingTask />);

    expect(getByText(NO_ITEM_LEFT)).toBeDefined();
  });

  it("should render with negative count", () => {
    const remainingTaskText = NO_ITEM_LEFT;
    const { getByText } = render(<RemainingTask count={-1} />);

    expect(getByText(remainingTaskText)).toBeDefined();
  });

  it("should render with singular count", () => {
    const remainingTaskText = `1 item left`;
    const { getByText } = render(<RemainingTask count={1} />);

    expect(getByText(remainingTaskText)).toBeDefined();
  });

  it("should render with plural count", () => {
    const remainingTaskText = "3 items left";
    const { getByText } = render(<RemainingTask count={3} />);

    expect(getByText(remainingTaskText)).toBeDefined();
  });

  it("should match 0 count snapshot", () => {
    const { container } = render(<RemainingTask count={0} />);
    expect(container).toMatchSnapshot();
  });

  it("should match singular count snapshot", () => {
    const { container } = render(<RemainingTask count={1} />);
    expect(container).toMatchSnapshot();
  });
  it("should match plural count snapshot", () => {
    const { container } = render(<RemainingTask count={3} />);
    expect(container).toMatchSnapshot();
  });
});
