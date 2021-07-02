import React from "react";
import Checkbox from "./Checkbox";
import Select from "./ReactSelect";
import TextField from "./TextField";
import Radio from "./Radio";
import { FormControl, FormGroup, RadioGroup } from "@material-ui/core";

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
          <TextField
            disabled={!showSubQuestion}
            variant="outlined"
            name={question_uuid}
          />
        </div>
      );
    case "MULTI_BOXES":
      return (
        <div style={{ marginTop: "1rem" }}>
          <h4 style={titleStyle}>{sub_question_content}</h4>
          <FormControl disabled={!showSubQuestion} component="fieldset">
            <FormGroup>
              {sub_response_content.map((item) => (
                <Checkbox label={item} value={item} name={question_uuid} />
              ))}
            </FormGroup>
          </FormControl>
        </div>
      );
    case "CHECK_BOXES":
      return (
        <div style={{ marginTop: "1rem" }}>
          <h4 style={titleStyle}>{sub_question_content}</h4>
          <FormControl disabled={!showSubQuestion} component="fieldset">
            <RadioGroup>
              {sub_response_content.map((item) => (
                <Radio label={item} value={item} name={question_uuid} />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      );
    case "DROPDOWN_MENU":
      return (
        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          <h4 style={titleStyle}>{sub_question_content}</h4>
          <Select
            isDisabled={!showSubQuestion}
            options={sub_response_content.map((answer) => ({
              value: answer,
              label: answer,
            }))}
            name={question_uuid}
            question_uuid={question_uuid}
            question_content={sub_question_content}
            sub_question_content={sub_question_content}
            sub_response_style={sub_response_style}
          />
        </div>
      );

    case "NULL":
      return null;

    default:
      return null;
  }
};

export default SubQuestionElement;
