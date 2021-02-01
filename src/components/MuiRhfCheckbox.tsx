import * as React from "react";

import { Controller } from "react-hook-form";

import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@material-ui/core";

import { MuiRhfFieldProps } from "~/typings";

type MuiRhfCheckboxProps = MuiRhfFieldProps &
  Omit<CheckboxProps, "defaultValue" | "onChange" | "label"> & {
    defaultValue?: unknown;
  };

const MuiRhfCheckbox: React.FC<MuiRhfCheckboxProps> = ({
  control,
  errors,
  name,
  defaultValue,
  label,
  required,
  disabled,
  ...rest
}) => (
  <Controller
    name={name}
    defaultValue={defaultValue}
    control={control}
    render={({ onChange, /*onBlur, */ value, ref }) => {
      const error = !!errors?.[name];
      return (
        <FormControl required={required} disabled={disabled} error={error}>
          <FormControlLabel
            inputRef={ref}
            checked={value}
            onChange={(event) =>
              onChange((event.target as HTMLInputElement).checked)
            }
            control={<Checkbox {...rest} />}
            label={label}
          />
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      );
    }}
  />
);

export default MuiRhfCheckbox;
