import * as React from "react";

import { TextFieldProps } from "@material-ui/core";

import { MuiRhfFieldProps } from "~/models/fields";

import MuiRhfAutocomplete from "./MuiRhfAutocomplete";

type MuiRhfAutocompleteProps = MuiRhfFieldProps & {
  defaultValue?: unknown;
  textField?: Omit<TextFieldProps, "onChange">;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  autocomplete?: any;
};

const MuiRhfAutocompleteSingle: React.FC<MuiRhfAutocompleteProps> = ({
  defaultValue = null,
  autocomplete: autocompleteProps = {},
  ...rest
}) => (
  <MuiRhfAutocomplete
    {...rest}
    autocomplete={{ ...autocompleteProps, multiple: false }}
    defaultValue={defaultValue}
  />
);

export default MuiRhfAutocompleteSingle;
