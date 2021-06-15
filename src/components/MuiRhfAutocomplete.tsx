import * as React from "react";

import { Controller } from "react-hook-form";

import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { MuiRhfAutocompleteProps } from "~/models/fields";

const MuiRhfAutocomplete: React.FC<MuiRhfAutocompleteProps> = ({
  control,
  errors,
  name,
  defaultValue,
  textFieldProps,
  autocompleteProps,
}) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field }) => (
      <Autocomplete
        fullWidth
        {...field}
        {...autocompleteProps}
        renderInput={(params) => (
          <TextField
            error={!!errors?.[name]}
            helperText={errors?.[name]}
            {...params}
            {...textFieldProps}
          />
        )}
        onChange={(_, data) => {
          field.onChange(data);
        }}
      />
    )}
  />
);

export default MuiRhfAutocomplete;
