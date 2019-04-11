import React from "react";
import { render } from "react-testing-library";

import Display from "./Display";

describe("<Display />", () => {
  it("should render Display", () => {
    render(<Display />);
  });

  it("should display open", () => {
    const { getByText } = render(<Display closed={false} />);

    getByText("Open");
  });

  it("should display unlocked", () => {
    const { getByText } = render(<Display locked={false} />);

    getByText("Unlocked");
  });

  it("should display closed", () => {
    const { getByText } = render(<Display closed={true} />);

    getByText("Closed");
  });

  it("should display locked", () => {
    const { getByText } = render(<Display locked={true} />);

    getByText("Locked");
  });
});
