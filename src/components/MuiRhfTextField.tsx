import React from "react";

import { Controller } from "react-hook-form";

import { TextField } from "@material-ui/core";

import { MuiRhfTextFieldProps } from "~/models/fields";

const MuiRhfTextField: React.FC<MuiRhfTextFieldProps> = ({
  control,
  name,
  defaultValue = "",
  ...rest
}) => (
  <Controller
    name={name}
    defaultValue={defaultValue}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <TextField
        fullWidth
        error={!!error}
        helperText={error?.message}
        {...field}
        {...rest}
      />
    )}
  />
);

export default MuiRhfTextField;
