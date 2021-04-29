import { Control, FieldErrors } from "react-hook-form";
import { TextFieldProps, SelectProps, CheckboxProps } from "@material-ui/core";
import { AutocompleteProps } from "@material-ui/lab";

/** Common fields props */
export type MuiRhfFieldProps = {
  control: Control;
  errors: FieldErrors;
  name: string;
  label?: string;
};

/** TextField */
export type MuiRhfTextFieldProps = MuiRhfFieldProps &
  Omit<TextFieldProps, "onChange"> & {
    defaultValue?: unknown;
  };

/** Select */
export type MuiRhfSelectProps = MuiRhfFieldProps & {
  defaultValue?: unknown;
  selectProps?: SelectProps;
  options: {
    value: string | number | readonly string[] | undefined;
    label: string;
  }[];
};

/** Checkbox */
export type MuiRhfCheckboxProps = MuiRhfFieldProps &
  Omit<CheckboxProps, "defaultValue" | "onChange" | "label"> & {
    defaultValue?: unknown;
  };

/** Autocomplete */
export type MuiRhfAutocompleteProps = MuiRhfFieldProps & {
  defaultValue?: unknown;
  textFieldProps?: Omit<TextFieldProps, "onChange">;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  autocompleteProps: any;
};
