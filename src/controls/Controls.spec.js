import React from "react";
import { render } from "react-testing-library";

import Controls from "./Controls";

describe("<Controls />", () => {
  it("should render Controls", () => {
    render(<Controls />);
  });

  it("should have a disabled lock gate button", () => {
    const { getByText } = render(<Controls />);

    const lockButton = getByText(/lock gate/i).disabled;

    expect(lockButton).toBeTruthy();
  });
});
