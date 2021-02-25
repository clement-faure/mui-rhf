import React from "react";

import { Grid } from "@material-ui/core";

import {
  MuiRhfFormProps,
  fieldComponentMap,
  defaultFieldComponent,
} from "~/models/form";

const MuiRhfForm: React.FC<MuiRhfFormProps> = ({
  fields,
  headers,
  spacing = 1,
  watch,
}) => {
  return (
    <>
      {React.Children.toArray(
        fields.map((fieldArray, key) => {
          // Format of fieldArray is NOT valid, must be array of array
          if (!Array.isArray(fieldArray)) {
            return null;
          }

          const header = headers?.[key];

          return (
            <Grid container spacing={spacing}>
              {header && (
                <Grid item xs={12}>
                  {header.title && <h2>{header.title}</h2>}
                </Grid>
              )}
              {fieldArray.map(
                ({
                  name,
                  label,
                  props,
                  gridProps = {},
                  type,
                  condition,
                  conditions,
                  conditionalProps,
                }) => {
                  // Initialize dynamic props based on watched values
                  const extra: { [key: string]: any } = {};

                  // Construct field, take textField by default
                  const MuiRhfField =
                    fieldComponentMap[type] || defaultFieldComponent;

                  if (watch) {
                    // Union will be used in condition keys
                    if (condition) {
                      let conditionHidden = true;

                      // Retrieve conditions keys
                      const conditionKeys = Object.keys(condition);

                      // Retrieve watched values
                      const conditionWatchedValues = watch(conditionKeys);

                      // Check conditions, we are actually doing an union of conditions
                      // If at least one condition has been satisfied, display
                      conditionKeys.forEach((conditionKey) => {
                        if (
                          condition[conditionKey](
                            conditionWatchedValues[conditionKey]
                          )
                        ) {
                          conditionHidden = false;
                        }
                      });

                      if (conditionHidden) {
                        return null;
                      }
                    }

                    // Intersection will be used in conditions keys
                    if (conditions) {
                      let conditionsHidden = false;

                      // Retrieve conditions keys
                      const conditionsKeys = Object.keys(conditions);

                      // Retrieve watched values
                      const conditionsWatchedValues = watch(conditionsKeys);

                      // Check conditions, we are actually doing an union of conditions
                      // All condition needs to be satisfied to display the field
                      conditionsKeys.forEach((conditionsKey) => {
                        if (
                          !conditions[conditionsKey](
                            conditionsWatchedValues[conditionsKey]
                          )
                        ) {
                          conditionsHidden = true;
                        }
                      });

                      if (conditionsHidden) {
                        return null;
                      }
                    }

                    if (conditionalProps) {
                      // Retrieve conditions keys
                      const conditionalKeys = Object.keys(conditionalProps);

                      // Retrieve watched values
                      const conditionalWatchedValues = watch(conditionalKeys);

                      // Check conditions
                      conditionalKeys.forEach((conditionalKey) => {
                        const [path, customCondition] = conditionalProps[
                          conditionalKey
                        ];

                        // FIXME: Support nested paths
                        extra[path] = customCondition(
                          conditionalWatchedValues[conditionalKey]
                        );
                      });
                    }
                  }
                  return (
                    <Grid
                      key={name || label}
                      item
                      xs={4} // Will be overwrite if specified in gridProps
                      {...gridProps}
                    >
                      <MuiRhfField
                        label={label}
                        name={name || label}
                        {...props}
                        {...extra}
                      />
                    </Grid>
                  );
                }
              )}
            </Grid>
          );
        })
      )}
    </>
  );
};

export default MuiRhfForm;
