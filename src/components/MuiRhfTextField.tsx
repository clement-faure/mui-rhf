import * as React from "react";

import { Controller } from "react-hook-form";

import { TextField } from "@material-ui/core";

import { MuiRhfTextFieldProps } from "~/models/fields";

const MuiRhfTextField: React.FC<MuiRhfTextFieldProps> = ({
  control,
  errors,
  name,
  defaultValue,
  ...rest
}) => (
  <Controller
    name={name}
    defaultValue={defaultValue}
    control={control}
    render={(props) => (
      <TextField
        {...props}
        {...rest}
        error={!!errors?.[name]}
        helperText={errors?.[name]}
      />
    )}
  />
);

export default MuiRhfTextField;
