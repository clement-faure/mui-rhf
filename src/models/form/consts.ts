import MuiRhfTextField from "~/components/MuiRhfTextField";
import MuiRhfSelect from "~/components/MuiRhfSelect";
import MuiRhfCheckbox from "~/components/MuiRhfCheckbox";
import MuiRhfAutocompleteSingle from "~/components/MuiRhfAutocompleteSingle";
import MuiRhfAutocompleteMultiple from "~/components/MuiRhfAutocompleteMultiple";

import { MuiRhfFieldComponentMap } from "./typing";

export const fieldComponentMap: MuiRhfFieldComponentMap = {
  textField: MuiRhfTextField,
  select: MuiRhfSelect,
  checkbox: MuiRhfCheckbox,
  autocompleteSingle: MuiRhfAutocompleteSingle,
  autocompleteMultiple: MuiRhfAutocompleteMultiple,
};
