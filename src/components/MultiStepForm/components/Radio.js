import React from "react";
import { useField } from "usetheform";
import { FormControlLabel, Radio } from "@material-ui/core";

export default function RadioQuestion({ value, name, disabled, label }) {
  const props = useField({
    type: "radio",
    name,
    value,
  });

  return (
    <>
      <FormControlLabel
        control={<Radio color="primary" />}
        disabled={disabled}
        label={label}
        {...props}
      />
    </>
  );
}
