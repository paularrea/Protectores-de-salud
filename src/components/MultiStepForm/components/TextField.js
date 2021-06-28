import React from "react";
import { default as TextFieldMUI } from "@material-ui/core/TextField";
import { useField, useValidation } from "usetheform";

export default function TextField({
  name,
  touched,
  disabled,
  validators,
  label,
}) {
  const [status, validation] = useValidation(validators);
  const props = useField({
    type: "text",
    name,
    touched,
    ...validation,
  });
  const showError = status.error !== undefined;
  return (
    <TextFieldMUI
    label={<span style={{ fontWeight: 700 }}>{label}</span>}
      disabled={disabled}
      multiline
      rowsMax={4}
      error={showError}
      {...props}
      variant="outlined"
    />
  );
}
