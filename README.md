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
import { MuiRhfTextField, MuiRhfSelect, MuiRhfCheckbox, MuiRhfAutocomplete } from "mui-rhf";

const Form = ({ onSubmit }) => {
  // Initialize form
  const { control, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} onValidate>
      <MuiRhfTextField
        control={control}
        errors={errors}
        name="email"
      />
    </form>
  )
};


```

## Contributors ✨

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
