import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { default as CheckboxMUI } from "@material-ui/core/Checkbox";
// import { useField } from "usetheform";

export default function Checkbox({ name, value, onChangeCheckbox, checkedArr, disabled, label }) {
  // const props = useField({
  //   type: "checkbox",
  //   name,
  //   value,
  // });
  return (
    <FormControlLabel
      control={<CheckboxMUI color="primary" />}
      label={<span style={{ fontWeight: 700 }}>{label}</span>}
      onChange={onChangeCheckbox}
      disabled={disabled}
      // {...props}
    />
  );
}
