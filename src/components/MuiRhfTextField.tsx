import * as React from "react";

import { Controller } from "react-hook-form";

import { TextField, TextFieldProps } from "@material-ui/core";

import { MuiRhfFieldProps } from "~/typings";

type MuiRhfTextFieldProps = MuiRhfFieldProps &
  Omit<TextFieldProps, "onChange"> & {
    defaultValue?: unknown;
  };

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
