import React from "react";

import { Grid } from "@material-ui/core";

import { MuiRhfFormProps, fieldComponentMap } from "~/models/form";
import { _set } from "~/lib/set";

import MuiRhfTextField from "./MuiRhfTextField";

const MuiRhfForm: React.FC<MuiRhfFormProps> = ({
  fields,
  headers,
  watch,
  control,
  spacing,
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
                  props = {},
                  gridProps = {},
                  type = "textField",
                  hideCondition,
                  hideConditions,
                  conditionalProps,
                }) => {
                  // Initialize dynamic props based on watched values
                  const extra: { [key: string]: any } = {};

                  const MuiRhfField =
                    fieldComponentMap[type] || // Retrieve component depending on type
                    MuiRhfTextField; //fallback to textField in case not valid type

                  if (watch) {
                    // Union will be used in hideCondition keys
                    if (hideCondition) {
                      let conditionHidden = true;

                      // Retrieve hideConditions keys
                      const conditionKeys = Object.keys(hideCondition);

                      // Retrieve watched values
                      const conditionWatchedValues = watch(conditionKeys);

                      // Check hideConditions, we are actually doing an union of hideConditions
                      // If at least one hideCondition has been satisfied, display
                      conditionKeys.forEach((conditionKey) => {
                        if (
                          hideCondition[conditionKey](
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

                    // Intersection will be used in hideConditions keys
                    if (hideConditions) {
                      let conditionsHidden = false;

                      // Retrieve hideConditions keys
                      const conditionsKeys = Object.keys(hideConditions);

                      // Retrieve watched values
                      const conditionsWatchedValues = watch(conditionsKeys);

                      // Check hideConditions, we are actually doing an union of hideConditions
                      // All hideCondition needs to be satisfied to display the field
                      conditionsKeys.forEach((conditionsKey) => {
                        if (
                          !hideConditions[conditionsKey](
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
                      // Retrieve hideConditions keys
                      const conditionalKeys = Object.keys(conditionalProps);

                      // Retrieve watched values
                      const conditionalWatchedValues = watch(conditionalKeys);

                      // Check hideConditions
                      conditionalKeys.forEach((conditionalKey) => {
                        const [path, customCondition] =
                          conditionalProps[conditionalKey];

                        _set(
                          extra,
                          path,
                          customCondition(
                            conditionalWatchedValues[conditionalKey]
                          )
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
                        {...props}
                        {...extra}
                        label={label}
                        name={name}
                        control={control}
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
