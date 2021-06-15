import * as React from "react";

import { Controller } from "react-hook-form";

import { TextField } from "@material-ui/core";

import { MuiRhfTextFieldProps } from "~/models/fields";

const MuiRhfTextField: React.FC<MuiRhfTextFieldProps> = ({
  control,
  errors,
  name,
  defaultValue = "",
  ...rest
}) => (
  <Controller
    name={name}
    defaultValue={defaultValue}
    control={control}
    render={({ field }) => (
      <TextField
        fullWidth
        error={!!errors?.[name]}
        helperText={errors?.[name]}
        {...field}
        {...rest}
      />
    )}
  />
);

export default MuiRhfTextField;
