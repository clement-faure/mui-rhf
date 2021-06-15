import React from "react";

import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import { useForm } from "react-hook-form";

import { MuiRhfForm } from "../";

describe("Form render", () => {
  it("render basic form", () => {
    const { result } = renderHook(() => useForm());
    const { control } = result.current;
    render(
      <MuiRhfForm
        control={control}
        fields={[
          [{ name: "firstName" }, { name: "lastName" }],
          [{ name: "email" }],
          [{ name: "rememberMe", type: "checkbox" }],
        ]}
      />
    );
  });

  it("render complex form", () => {
    const { result } = renderHook(() => useForm());
    const { control } = result.current;
    render(
      <MuiRhfForm
        control={control}
        headers={[{ title: "Company section" }]}
        fields={[
          [
            {
              type: "autocompleteSingle",
              name: "company",
              props: {
                autocompleteProps: { options: ["Company A", "Company B"] },
              },
            },
            {
              type: "autocompleteMultiple",
              name: "collaborator",
              props: {
                autocompleteProps: {
                  options: ["Collaborator A", "Collaborator B"],
                },
              },
            },
          ],
        ]}
      />
    );
  });

  it("render basic form with hideConditions", () => {
    const { result } = renderHook(() => useForm());
    const { control } = result.current;
    render(
      <MuiRhfForm
        control={control}
        fields={[
          [
            { name: "firstName" },
            {
              name: "lastName",
              // Do not display lastName field when user is John Doe
              hideCondition: { firstName: (value) => value === "John Doe" },
            },
          ],
        ]}
      />
    );
  });
});
