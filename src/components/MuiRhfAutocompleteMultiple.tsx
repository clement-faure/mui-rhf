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

const MuiRhfAutocompleteMultiple: React.FC<MuiRhfAutocompleteProps> = ({
  defaultValue = [],
  autocomplete: autocompleteProps = {},
  ...rest
}) => (
  <MuiRhfAutocomplete
    {...rest}
    autocomplete={{ ...autocompleteProps, multiple: true }}
    defaultValue={defaultValue}
  />
);

export default MuiRhfAutocompleteMultiple;
