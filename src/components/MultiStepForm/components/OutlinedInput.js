import React from "react";
import { default as OutlinedInputMUI } from "@material-ui/core/OutlinedInput";
import { useField, useValidation } from "usetheform";

export default function TextField({
  name,
  touched,
  validators,
  label,
  value
}) {
  
  const [status, validation] = useValidation(validators);
  const props = useField({
    type: "text",
    name,
    touched,
    value,
    ...validation
  });

  const showError = status.error !== undefined;

  return (
    <OutlinedInputMUI
    label={label}
    value={value}
    error={showError}
    {...props}
  />
  );
}
