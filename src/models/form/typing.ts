import { Control, FieldErrors } from "react-hook-form";
import { GridSpacing, GridProps } from "@material-ui/core";
import {
  MuiRhfTextFieldProps,
  MuiRhfSelectProps,
  MuiRhfCheckboxProps,
  MuiRhfAutocompleteProps,
} from "~/models/fields";

/** react-hook-form watch */
export type RhfWatch = (names?: string | string[]) => any;

/** Form field key component mapping */
export type MuiRhfFieldComponentMap = {
  textField: React.FC<MuiRhfTextFieldProps>;
  select: React.FC<MuiRhfSelectProps>;
  checkbox: React.FC<MuiRhfCheckboxProps>;
  autocomplete: React.FC<MuiRhfAutocompleteProps>;
};

/** Form */
type MuiRhfFormFieldCondition = { [key: string]: (value: unknown) => boolean };
type MuiRhfFormFieldConditionalProps = {
  [key: string]: [string, (value: unknown) => unknown];
};

type MuiRhfFormField = {
  name: string;
  label?: string;
  props?: any;
  type?: keyof MuiRhfFieldComponentMap;
  gridProps?: Pick<GridProps, "xs" | "sm" | "md" | "lg" | "xl">;
  condition?: MuiRhfFormFieldCondition; // Union
  conditions?: MuiRhfFormFieldCondition; // Intersection
  conditionalProps?: MuiRhfFormFieldConditionalProps; // Props applied when condition is satisfied
};

type MuiRhfFormHeader = {
  title?: string;
};

export type MuiRhfFormProps = {
  fields: MuiRhfFormField[][];
  headers?: MuiRhfFormHeader[];
  spacing?: GridSpacing;
  watch?: RhfWatch;
  control: Control;
  errors: FieldErrors;
};
