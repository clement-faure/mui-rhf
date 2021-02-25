import MuiRhfTextField from "~/components/MuiRhfTextField";
import MuiRhfSelect from "~/components/MuiRhfSelect";
import MuiRhfCheckbox from "~/components/MuiRhfCheckbox";
import MuiRhfAutocomplete from "~/components/MuiRhfAutocomplete";

import { MuiRhfFieldComponentMap } from "./typing";

export const fieldComponentMap: MuiRhfFieldComponentMap = {
  textField: MuiRhfTextField,
  select: MuiRhfSelect,
  checkbox: MuiRhfCheckbox,
  autocomplete: MuiRhfAutocomplete,
};
