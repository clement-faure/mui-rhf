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
    const { control, errors /**, loading */ } = result.current;
    render(
      <MuiRhfTextField control={control} errors={errors} name="textField" />
    );
  });
  it("render MuiRhfAutocompleteSingle", () => {
    const { result } = renderHook(() => useForm());
    const { control, errors /**, loading */ } = result.current;
    render(
      <MuiRhfAutocompleteSingle
        control={control}
        errors={errors}
        name="autocompleteSingleField"
        autocompleteProps={{
          options: [],
        }}
      />
    );
  });

  it("render MuiRhfAutocompleteMultiple", () => {
    const { result } = renderHook(() => useForm());
    const { control, errors /**, loading */ } = result.current;
    render(
      <MuiRhfAutocompleteMultiple
        control={control}
        errors={errors}
        name="autocompleteMultipleField"
        autocompleteProps={{
          options: [],
        }}
      />
    );
  });

  it("render MuiRhfCheckbox", () => {
    const { result } = renderHook(() => useForm());
    const { control, errors /**, loading */ } = result.current;
    render(
      <MuiRhfCheckbox control={control} errors={errors} name="checkboxField" />
    );
  });

  it("render MuiRhfSelect", () => {
    const { result } = renderHook(() => useForm());
    const { control, errors /**, loading */ } = result.current;
    render(
      <MuiRhfSelect
        control={control}
        errors={errors}
        name="selectField"
        options={[]}
      />
    );
  });
});
