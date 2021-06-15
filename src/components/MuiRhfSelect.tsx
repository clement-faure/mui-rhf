import React from "react";

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
    render={({ field, fieldState: { error } }) => {
      return (
        <FormControl error={!!error}>
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
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      );
    }}
  />
);

export default MuiRhfSelect;
