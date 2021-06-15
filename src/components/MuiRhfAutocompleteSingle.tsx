import React from "react";

import { MuiRhfAutocompleteProps } from "~/models/fields";

import MuiRhfAutocomplete from "./MuiRhfAutocomplete";

const MuiRhfAutocompleteSingle: React.FC<MuiRhfAutocompleteProps> = ({
  defaultValue = null,
  autocompleteProps = {},
  ...rest
}) => (
  <MuiRhfAutocomplete
    {...rest}
    autocompleteProps={{ ...autocompleteProps, multiple: false }}
    defaultValue={defaultValue}
  />
);

export default MuiRhfAutocompleteSingle;
