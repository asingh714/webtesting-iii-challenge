import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

import Dashboard from "./Dashboard";
import Display from "../Display/Display";
import Controls from "../Controls/Controls";

describe("<Dashboard />", () => {
  it("should render Display and Controls", () => {
    render(<Display />);
    render(<Controls />);
  });

  it("should close the gate when the button is pressed", () => {
    const { getByText } = render(<Dashboard />);
    const closeButton = getByText(/close gate/i);

    fireEvent.click(closeButton);
    
    const closeButtonText = closeButton.textContent;
    expect(closeButtonText).toBe("Open Gate");
  });

  it("should lock the gate when the button is pressed", () => {
    const { getByText } = render(<Dashboard />);
    const closeButton = getByText(/close gate/i);
    const lockButton = getByText(/lock gate/i);

    fireEvent.click(closeButton);
    fireEvent.click(lockButton);
    
    const lockButtonText = lockButton.textContent;
    expect(lockButtonText).toBe("Unlock Gate");
  });
});
