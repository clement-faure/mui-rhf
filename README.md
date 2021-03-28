# mui-rhf

Quickly build powerful forms using [Material UI](https://material-ui.com/) and [React Hook Form](https://react-hook-form.com/)

## Installation

mui-rhf is available as an [npm package](https://www.npmjs.com/package/mui-rhf).

```
// with npm
npm install mui-rhf

// with yarn
yarn add mui-rhf
```

## Usage

```
import * as React from 'react';

import { useForm } from "react-hook-form";
import { MuiRhfForm } from "mui-rhf";
import { Button } from "@material-ui/core";

const Form = ({ onSubmit }) => {
  // Initialize form
  const { control, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Play with retrieved data
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <MuiRhfForm
        control={control}
        errors={errors}
        fields={[
          [{ name: "firstName" }, { name: "lastName" }],
          [{ name: "email" }],
          [{ name: "rememberMe", type: "checkbox" }]
        ]}
      />
      <Button type="submit">
        Submit
      </Button>
    </form>
  )
};


```

## Type

### `MuiRhfFormProps`

These are props that you pass to `<MuiRhfForm />`

#### fields: MuiRhfFormField[][];

Fields to construct the form

```
type MuiRhfFormField = {
  name: string;
  label?: string;
  props?: any;
  type?: keyof MuiRhfFieldComponentMap;
  gridProps?: Pick<GridProps, "xs" | "sm" | "md" | "lg" | "xl">;
  condition?: MuiRhfFormFieldCondition; // Union of conditions
  conditions?: MuiRhfFormFieldCondition; // Intersection of conditions
  conditionalProps?: MuiRhfFormFieldConditionalProps; // Props applied when condition is satisfied
};
```

#### headers?: MuiRhfFormHeader[];

An array of titles

```
type MuiRhfFormHeader = {
  title?: string;
};
```

#### spacing?: GridSpacing;

Spacing applied to main Grid container

#### watch?: RhfWatch;

Provided by [React Hook Form](https://react-hook-form.com/api#watch)

#### control: Control;

Provided by [React Hook Form](https://react-hook-form.com/api#control)

#### errors: FieldErrors;

Provided by [React Hook Form](https://react-hook-form.com/api#errors)

## Contributors ✨

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
