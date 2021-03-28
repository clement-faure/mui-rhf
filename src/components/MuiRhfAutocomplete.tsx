import * as React from "react";

import { Controller } from "react-hook-form";

import { TextField, TextFieldProps } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { MuiRhfFieldProps } from "~/models/fields";

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
        fullWidth
        {...props}
        {...autocompleteProps}
        renderInput={(params) => (
          <TextField
            error={!!errors?.[name]}
            helperText={errors?.[name]}
            {...params}
            {...textFieldProps}
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
