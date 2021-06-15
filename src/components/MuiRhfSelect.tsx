import * as React from "react";

import { Controller } from "react-hook-form";

import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import { MuiRhfSelectProps } from "~/models/fields";

const MuiRhfSelect: React.FC<MuiRhfSelectProps> = ({
  control,
  errors,
  name,
  label,
  defaultValue = "",
  options,
  selectProps,
}) => (
  <Controller
    name={name}
    defaultValue={defaultValue}
    control={control}
    render={({ field }) => {
      const error = errors?.[name];
      return (
        <FormControl error={error}>
          <InputLabel id={name}>{label}</InputLabel>
          <Select
            labelId={name}
            displayEmpty
            fullWidth
            {...field}
            {...selectProps}
          >
            {React.Children.toArray(
              options.map(({ value, label }) => (
                <MenuItem value={value}>{label}</MenuItem>
              ))
            )}
          </Select>
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      );
    }}
  />
);

export default MuiRhfSelect;
