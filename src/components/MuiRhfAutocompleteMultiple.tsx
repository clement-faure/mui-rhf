import React from "react";

import { MuiRhfAutocompleteProps } from "~/models/fields";

import MuiRhfAutocomplete from "./MuiRhfAutocomplete";

const MuiRhfAutocompleteMultiple: React.FC<MuiRhfAutocompleteProps> = ({
  defaultValue = [],
  autocompleteProps = {},
  ...rest
}) => (
  <MuiRhfAutocomplete
    {...rest}
    autocompleteProps={{ ...autocompleteProps, multiple: true }}
    defaultValue={defaultValue}
  />
);

export default MuiRhfAutocompleteMultiple;
