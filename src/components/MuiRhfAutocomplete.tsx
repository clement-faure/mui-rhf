import React from "react";

import { Controller } from "react-hook-form";

import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { MuiRhfAutocompleteProps } from "~/models/fields";

const MuiRhfAutocomplete: React.FC<MuiRhfAutocompleteProps> = ({
  control,
  name,
  defaultValue,
  textFieldProps,
  autocompleteProps,
}) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field, fieldState: { error } }) => (
      <Autocomplete
        fullWidth
        {...field}
        {...autocompleteProps}
        renderInput={(params) => (
          <TextField
            error={!!error}
            helperText={error?.message}
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
