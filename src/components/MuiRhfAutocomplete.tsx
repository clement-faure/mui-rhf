import * as React from "react";

import { Controller } from "react-hook-form";

import { TextField, TextFieldProps } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { MuiRhfFieldProps } from "~/typings";

type MuiRhfAutocompleteProps = MuiRhfFieldProps & {
  defaultValue?: unknown;
  textField?: Omit<TextFieldProps, "onChange">;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  autocomplete?: any;
};

const MuiRhfAutocomplete: React.FC<MuiRhfAutocompleteProps> = ({
  control,
  errors,
  name,
  defaultValue,
  textField: textFieldProps,
  autocomplete: autocompleteProps,
}) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={(props) => (
      <Autocomplete
        {...props}
        {...autocompleteProps}
        renderInput={(params) => (
          <TextField
            {...params}
            {...textFieldProps}
            error={!!errors?.[name]}
            helperText={errors?.[name]}
          />
        )}
        onChange={(_, data) => {
          props.onChange(data);
        }}
      />
    )}
  />
);

export default MuiRhfAutocomplete;
