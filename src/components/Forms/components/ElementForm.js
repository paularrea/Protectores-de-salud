import React, { useState } from "react";
import { TextField, Checkboxes, Radios, Select } from "mui-rff";
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
          <Radios
            onClick={handleChangeRadio}
            name={question_uuid}
            color="primary"
            formControlProps={{ margin: "none" }}
            radioGroupProps={{ row: false }}
            data={response_content.map((item) => ({
              label: (
                <span>
                  <b>{item}</b>
                </span>
              ),
              value: item,
            }))}
          />
          {subQuestion}
        </div>
      );
    case "DROPDOWN_MENU":
      return (
        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          <h4 className={styles.question_title}>{question_content}</h4>
          <Select
            variant="outlined"
            name={question_uuid}
            formControlProps={{ margin: "none" }}
          >
            {response_content.map((answer) => (
              <MenuItem value={answer}>{answer}</MenuItem>
            ))}
          </Select>
          {subQuestion}
        </div>
      );
    case "EDITABLE":
      return (
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <h4 className={styles.question_title}>{question_content}</h4>
          <TextField variant="outlined" name={question_uuid} margin="none" />
        </div>
      );
    case "MULTI_BOXES":
      return (
        <div style={{ margin: "1rem 0 2rem 0" }}>
          <h4 className={styles.question_title}>{question_content}</h4>
          <Checkboxes
            color="primary"
            name={question_uuid}
            formControlProps={{ margin: "none" }}
            data={response_content.map((item) => ({
              label: (
                <span>
                  <b>{item}</b>
                </span>
              ),
              value: item,
            }))}
          />
          {subQuestion}
        </div>
      );
    default:
      return null;
  }
};

export default Element;
