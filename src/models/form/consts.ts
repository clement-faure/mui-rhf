import {
  MuiRhfTextField,
  MuiRhfSelect,
  MuiRhfCheckbox,
  MuiRhfAutocomplete,
} from "~/components";

import { MuiRhfFieldComponentMap } from "./typing";

export const defaultFieldComponent = MuiRhfTextField;
export const fieldComponentMap: MuiRhfFieldComponentMap = {
  textField: MuiRhfTextField,
  select: MuiRhfSelect,
  checkbox: MuiRhfCheckbox,
  autocomplete: MuiRhfAutocomplete,
};
