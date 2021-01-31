import React from "react";

import { cleanup, render } from "@testing-library/react";

import MuiRhfTextField from "../MuiRhfTextField";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("Basic render", () => {
  it("render MuiRhfTextField", () => {
    render(<MuiRhfTextField />);
  });
});
