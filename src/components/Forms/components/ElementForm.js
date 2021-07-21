import React, { useState } from "react";
import { Field } from "formik";
import { TextField, Select } from "formik-material-ui";
import { MenuItem } from "@material-ui/core";
import styles from "../form.module.scss";
import "../form.css";
import SubQuestionElement from "./SubQuestionElement";

const Element = ({
  question: {
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
  },
}) => {
  const [showSubQuestion, setShowSubQuestion] = useState(false);

  const subQuestion =
    sub_question_content !== "NULL" ? (
      <SubQuestionElement
        name={question_uuid}
        showSubQuestion={showSubQuestion}
        sub_response_content={sub_response_content}
        question_uuid={question_uuid}
        sub_response_style={sub_response_style}
        sub_question_content={sub_question_content}
      />
    ) : null;

  const handleChangeRadio = (event) => {
    event.target.value === "Si" && setShowSubQuestion(true);
    event.target.value !== "Si" && setShowSubQuestion(false);
  };

  switch (response_style) {
    case "CHECK_BOXES":
      return (
        <div style={{ margin: "1rem 0 2rem 0" }}>
          <h4 className={styles.question_title}>{question_content}</h4>
          <div
            role="group"
            aria-labelledby="radio-group"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {response_content.map((answer, key) => (
              <label
                key={key}
                style={{
                  cursor: "pointer",
                  marginBottom: "1rem",
                  fontWeight: 700,
                }}
                onChange={handleChangeRadio}
              >
                <Field
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
          {subQuestion}
        </div>
      );
    case "DROPDOWN_MENU":
      return (
        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          <h4 className={styles.question_title}>{question_content}</h4>
          <Field
            type="select"
            variant="outlined"
            style={{ width: "100%" }}
            component={Select}
            name={question_uuid}
          >
            {response_content.map((answer, key) => (
              <MenuItem key={key} value={answer}>
                {answer}
              </MenuItem>
            ))}
          </Field>
          {subQuestion}
        </div>
      );
    case "EDITABLE":
      return (
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <h4 className={styles.question_title}>{question_content}</h4>
            <Field
              type="text"
              variant="outlined"
              name={question_uuid}
              margin="none"
              component={TextField}
            />
        </div>
      );
    case "MULTI_BOXES":
      return (
        <div style={{ margin: "1rem 0 2rem 0" }}>
          <h4 className={styles.question_title}>{question_content}</h4>
          <div
          className="checkbox-group"
            role="group"
            aria-labelledby="checkbox-group"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {response_content.map((answer, key) => (
              <label
                key={key}
                style={{
                  cursor: "pointer",
                  marginBottom: "1rem",
                  fontWeight: 700,
                }}
              >
                <Field
                  style={{
                    cursor: "pointer",
                    margin: "0 1rem 0 0",
                    width: "16px",
                    height: "16px",
                  }}
                  type="checkbox"
                  name={question_uuid}
                  value={answer}
                />
                {answer}
                <span></span>
              </label>
            ))}
          </div>
          {subQuestion}
        </div>
      );
    default:
      return null;
  }
};

export default Element;
