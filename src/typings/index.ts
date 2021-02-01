import { Control, FieldErrors } from "react-hook-form";

export type MuiRhfFieldProps = {
  control: Control;
  errors: FieldErrors;
  name: string;
  label?: string;
};
