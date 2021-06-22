import React, { useState } from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import Select from "react-select";
import { default as TextFieldMUI } from "@material-ui/core/TextField";

export default function CheckboxQuestion({
  name,
  value,
  disabled,
  color = "primary",
  label,
  chapter_name,
  question_uuid,
  question_content,
  response_type,
  response_content,
  sub_question_content,
  sub_response_type,
  sub_response_style,
  sub_response_content,
}) {
  const [showSubQuestion, setShowSubQuestion] = useState(false);
  const subQuestion = () => {
    switch (sub_response_style) {
      case "EDITABLE":
        return (
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <h4>{sub_question_content}</h4>
            <TextFieldMUI disabled={!showSubQuestion} variant="outlined" />
          </div>
        );
      case "MULTI_BOXES":
        return (
          <div style={{ marginTop: "1rem" }}>
            <h4>{sub_question_content}</h4>
            <FormControl disabled={!showSubQuestion} component="fieldset">
              <FormGroup>
                {sub_response_content.map((item, i) => {
                  return (
                    <FormControlLabel
                      key={i}
                      name={question_uuid + item}
                      value={item}
                      label={item}
                      control={<Checkbox color="primary" />}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </div>
        );
      case "CHECK_BOXES":
        return (
          <div style={{ marginTop: "1rem" }}>
            <h4>{sub_question_content}</h4>
            <FormControl disabled={!showSubQuestion} component="fieldset">
              <RadioGroup>
                {sub_response_content.map((item, i) => {
                  return (
                    <FormControlLabel
                      key={i}
                      name={question_uuid}
                      value={item}
                      label={item}
                      control={<Radio color="primary" />}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </div>
        );
      case "DROPDOWN_MENU":
        const options = sub_response_content.map((answer) => ({
          value: answer,
          label: answer,
        }));
        return (
          <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
            <h4>{sub_question_content}</h4>
            <Select disabled={!showSubQuestion} options={options} />
          </div>
        );

      case "NULL":
        return null;

      default:
        return null;
    }
  };

  const handleChange = (event) => {
    event.target.value === "Si" && setShowSubQuestion(true);
    event.target.value !== "Si" && setShowSubQuestion(false);
  };

  const options =
    response_content &&
    response_content.map((item, i) => {
      return (
        <FormControlLabel
          key={i}
          name={question_uuid + item}
          value={item}
          label={item}
          onChange={handleChange}
          control={<Checkbox color="primary" />}
        />
      );
    });
  return (
    <>
      <h4>{question_content}</h4>
      <FormControl component="fieldset">
        <FormGroup>{options}</FormGroup>
      </FormControl>
      {subQuestion()}
    </>
  );
}
