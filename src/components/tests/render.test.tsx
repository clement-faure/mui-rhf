import React from "react";

import { render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";

import { useForm } from "react-hook-form";

import MuiRhfTextField from "../MuiRhfTextField";

describe("Basic render", () => {
  it("render MuiRhfTextField", () => {
    const { result } = renderHook(() => useForm());
    const { control, errors /**, loading */ } = result.current;
    render(
      <MuiRhfTextField control={control} errors={errors} name="textField" />
    );
  });
});
