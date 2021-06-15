import { Control } from "react-hook-form";
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
  autocompleteSingle: React.FC<MuiRhfAutocompleteProps>;
  autocompleteMultiple: React.FC<MuiRhfAutocompleteProps>;
};

/** Form */
type MuiRhfFormFieldHideConditions = {
  [key: string]: (value: unknown) => boolean;
};
type MuiRhfFormFieldConditionalProps = {
  [key: string]: [string, (value: unknown) => unknown];
};

export type MuiRhfFormField = {
  name: string;
  label?: string;
  props?: any;
  type?: keyof MuiRhfFieldComponentMap;
  gridProps?: Pick<GridProps, "xs" | "sm" | "md" | "lg" | "xl">;
  hideCondition?: MuiRhfFormFieldHideConditions; // Union
  hideConditions?: MuiRhfFormFieldHideConditions; // Intersection
  conditionalProps?: MuiRhfFormFieldConditionalProps; // Props applied when hideCondition is satisfied
};

export type MuiRhfFormHeader = {
  title?: string;
};

export type MuiRhfFormProps = {
  fields: MuiRhfFormField[][];
  headers?: MuiRhfFormHeader[];
  spacing?: GridSpacing;
  watch?: RhfWatch;
  control: Control;
};
