import React from "react";
import { default as TextFieldMUI } from "@material-ui/core/TextField";

export default function TextField({
  name,
  touched,
  validators,
  label,
  variant,
  chapter_name,
  question_uuid,
  question_content,
  response_type,
  response_style,
  response_content,
  sub_question_content,
  sub_response_type,
  sub_response_style,
  sub_response_content,
}) {
  return (
    <div style={{ marginTop: "1rem", marginBottom:'1rem' }}>
      <h4>{question_content}</h4>
      <TextFieldMUI variant="outlined" />
    </div>
  );
}
