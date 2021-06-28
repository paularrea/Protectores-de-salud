import React, { useState, useEffect } from "react";
// import Checkbox from "./Checkbox";
import Select from "./ReactSelect";
import TextField from "./TextField";
import Radio from "./Radio";
import {
  RadioGroup,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
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
  const [checkedItems, setCheckedItems] = useState({}); //plain object as state

  const handleChangeCheckbox = (event) => {
    // updating an object instead of a Map
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    console.log("checkedItems: ", checkedItems);
  }, [checkedItems]);

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
          <RadioGroup onChange={handleChangeRadio}>
            {response_content.map((item, index) => (
              <Radio
                key={index}
                label={item}
                value={item}
                name={question_uuid}
              />
            ))}
          </RadioGroup>
          {subQuestion}
        </div>
      );
    case "DROPDOWN_MENU":
      return (
        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          <h4 className={styles.question_title}>{question_content}</h4>
          <Select
            options={response_content.map((answer) => ({
              value: answer,
              label: answer,
            }))}
            name={question_uuid}
            question_uuid={question_uuid}
            question_content={question_content}
            sub_question_content={sub_question_content}
            sub_response_style={sub_response_style}
          />
          {subQuestion}
        </div>
      );
    case "EDITABLE":
      return (
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <h4 className={styles.question_title}>{question_content}</h4>
          <TextField name={question_uuid} />
        </div>
      );
    case "MULTI_BOXES":
      return (
        <div style={{ margin: "1rem 0 2rem 0" }}>
          <h4 className={styles.question_title}>{question_content}</h4>
          <FormGroup>
            {response_content.map((item, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox color="primary" />}
                label={<span style={{ fontWeight: 700 }}>{item}</span>}
                name={item}
                checked={checkedItems[item]}
                onChange={handleChangeCheckbox}
              />
            ))}
          </FormGroup>
          {subQuestion}
        </div>
      );
    default:
      return null;
  }
};

export default Element;
