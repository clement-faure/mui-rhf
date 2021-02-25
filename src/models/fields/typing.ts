import { Control, FieldErrors } from "react-hook-form";
import { TextFieldProps, SelectProps, CheckboxProps } from "@material-ui/core";

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
  select?: SelectProps;
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
  textField?: Omit<TextFieldProps, "onChange">;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  autocomplete?: any;
};
