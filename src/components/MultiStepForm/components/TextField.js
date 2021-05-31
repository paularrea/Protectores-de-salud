import React from "react";
import { default as TextFieldMUI } from "@material-ui/core/TextField";
import { useField, useValidation } from "usetheform";

export default function TextField({
  name,
  touched,
  validators,
  label,
  variant
}) {
  const [status, validation] = useValidation(validators);
  const props = useField({
    type: "text",
    name,
    touched,
    ...validation
  });

  const showError = status.error !== undefined;

  return (
    <TextFieldMUI
      label={label}
      variant={variant}
      error={showError}
      {...props}
    />
  );
}
