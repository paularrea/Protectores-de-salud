import React from "react";
import { Field } from "formik";
import styles from "../form.module.scss"
import { TextField, Select } from "formik-material-ui";
import { MenuItem } from "@material-ui/core";

const SubQuestionElement = ({
  showSubQuestion,
  question_uuid,
  sub_question_content,
  sub_response_style,
  sub_response_content,
}) => {
  const titleStyle = {
    color: !showSubQuestion ? "#C5C5C5" : "black",
    fontWeight: 400,
    marginBottom: "1rem",
  };

  switch (sub_response_style) {
    case "EDITABLE":
      return (
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <h4 style={titleStyle}>{sub_question_content}</h4>
          <Field
            disabled={!showSubQuestion}
            variant="outlined"
            name={question_uuid}
            margin="none"
            component={TextField}
          />
        </div>
      );
    case "MULTI_BOXES":
      return (
        <div style={{ marginTop: "1rem" }}>
          <h4 style={titleStyle}>{sub_question_content}</h4>
          <div
            role="group"
            aria-labelledby="checkbox-group"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {sub_response_content.map((answer, key) => (
              <label
                key={key}
                style={{
                  cursor: "pointer",
                  marginBottom: "1rem",
                  color: !showSubQuestion ? "#C5C5C5" : "black",
                  fontWeight: 700,
                }}
              >
                <Field
                  disabled={!showSubQuestion}
                  style={{
                    cursor: "pointer",
                    margin: "0 1rem 0 0",
                    width: "16px",
                    height: "16px",
                  }}
                  type="checkbox"
                  className={styles.checkbox_form}
                  name={question_uuid}
                  value={answer}
                />
                {answer}
              </label>
            ))}
          </div>
        </div>
      );
    case "CHECK_BOXES":
      return (
        <div style={{ marginTop: "1rem" }}>
          <h4 style={titleStyle}>{sub_question_content}</h4>
          <div
            role="group"
            aria-labelledby="radio-group"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {sub_response_content.map((answer, key) => (
              <label
                key={key}
                style={{
                  cursor: "pointer",
                  marginBottom: "1rem",
                  fontWeight: 700,
                }}
              >
                <Field
                  disabled={!showSubQuestion}
                  style={{
                    cursor: "pointer",
                    margin: "0 1rem 0 0",
                    width: "18px",
                    height: "18px",
                  }}
                  type="radio"
                  name={question_uuid}
                  value={answer}
                />
                {answer}
              </label>
            ))}
          </div>
        </div>
      );
    case "DROPDOWN_MENU":
      return (
        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          <h4 style={titleStyle}>{sub_question_content}</h4>
          <Field
            isDisabled={!showSubQuestion}
            variant="outlined"
            style={{ width: "100%" }}
            component={Select}
            name={question_uuid}
            MenuProps={{
              PaperProps: {
                style: {
                  transform: 'translate3d(0, 0, 0)'
                } 
              }   
            }}
          >
            {sub_response_content.map((answer, key) => (
              <MenuItem key={key} value={answer}>
                {answer}
              </MenuItem>
            ))}
          </Field>
        </div>
      );

    case "NULL":
      return null;

    default:
      return null;
  }
};

export default SubQuestionElement;
