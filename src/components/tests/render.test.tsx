import React from "react";

import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import { useForm } from "react-hook-form";

import {
  MuiRhfTextField,
  MuiRhfSelect,
  MuiRhfCheckbox,
  MuiRhfAutocompleteSingle,
  MuiRhfAutocompleteMultiple,
} from "../";

describe("Basic render", () => {
  it("render MuiRhfTextField", () => {
    const { result } = renderHook(() => useForm());
    const { control } = result.current;
    render(<MuiRhfTextField control={control} name="textField" />);
  });
  it("render MuiRhfAutocompleteSingle", () => {
    const { result } = renderHook(() => useForm());
    const { control } = result.current;
    render(
      <MuiRhfAutocompleteSingle
        control={control}
        name="autocompleteSingleField"
        autocompleteProps={{
          options: [],
        }}
      />
    );
  });

  it("render MuiRhfAutocompleteMultiple", () => {
    const { result } = renderHook(() => useForm());
    const { control } = result.current;
    render(
      <MuiRhfAutocompleteMultiple
        control={control}
        name="autocompleteMultipleField"
        autocompleteProps={{
          options: [],
        }}
      />
    );
  });

  it("render MuiRhfCheckbox", () => {
    const { result } = renderHook(() => useForm());
    const { control } = result.current;
    render(<MuiRhfCheckbox control={control} name="checkboxField" />);
  });

  it("render MuiRhfSelect", () => {
    const { result } = renderHook(() => useForm());
    const { control } = result.current;
    render(<MuiRhfSelect control={control} name="selectField" options={[]} />);
  });
});
