import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Select from "./ReactSelect";
import TextField from "./TextField";
import Radio from "./Radio";
import { RadioGroup, FormGroup, FormControl } from "@material-ui/core";
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
  const [checkedArr, setCheckedArr] = useState([]);

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

  const handleChangeCheckbox = (event) => {
    let arr = checkedArr;
    arr.push(event.target.value);
    setCheckedArr(arr);
  };

  switch (response_style) {
    case "CHECK_BOXES":
      return (
        <div style={{ marginTop: "1rem" }}>
          <h4>{question_content}</h4>
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
          <h4>{question_content}</h4>
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
          <h4>{question_content}</h4>
          <TextField name={question_uuid} />
        </div>
      );
    case "MULTI_BOXES":
      return (
        <div style={{ marginTop: "1rem" }}>
          <h4>{question_content}</h4>
          <FormControl>
            <FormGroup onChange={handleChangeCheckbox}>
              {response_content.map((item, index) => (
                <Checkbox
                  key={index}
                  label={item}
                  value={item}
                  name={question_uuid}
                />
              ))}
            </FormGroup>
          </FormControl>
          {subQuestion}
        </div>
      );
    default:
      return null;
  }
};

export default Element;
