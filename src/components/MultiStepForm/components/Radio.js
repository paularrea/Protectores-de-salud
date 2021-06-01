import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { default as RadioMUI } from "@material-ui/core/Radio";
import { useField } from "usetheform";

export default function Radio({
  name,
  value,
  disabled,
  color = "primary",
  label
}) {
  const props = useField({
    type: "radio",
    name,
    value
  });
  return (
    <FormControlLabel
      control={<RadioMUI color={color} />}
      label={label}
      disabled={disabled}
      {...props}
    />
  );
}
