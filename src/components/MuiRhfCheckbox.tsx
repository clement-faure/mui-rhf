import React from "react";

import { Controller } from "react-hook-form";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@material-ui/core";

import { MuiRhfCheckboxProps } from "~/models/fields";

const MuiRhfCheckbox: React.FC<MuiRhfCheckboxProps> = ({
  control,
  name,
  defaultValue = false,
  label,
  required,
  disabled,
  ...rest
}) => (
  <Controller
    name={name}
    defaultValue={defaultValue}
    control={control}
    render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
      return (
        <FormControl required={required} disabled={disabled} error={!!error}>
          <FormControlLabel
            inputRef={ref}
            checked={value}
            onChange={(event) =>
              onChange((event.target as HTMLInputElement).checked)
            }
            control={<Checkbox {...rest} />}
            label={label}
          />
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      );
    }}
  />
);

export default MuiRhfCheckbox;
