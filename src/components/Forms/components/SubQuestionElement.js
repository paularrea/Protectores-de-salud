import React from "react";
import { TextField, Checkboxes, Radios, Select } from "mui-rff";
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
          <TextField
            disabled={!showSubQuestion}
            variant="outlined"
            name={question_uuid}
            margin="none"
          />
        </div>
      );
    case "MULTI_BOXES":
      return (
        <div style={{ marginTop: "1rem" }}>
          <h4 style={titleStyle}>{sub_question_content}</h4>
          <Checkboxes
            disabled={!showSubQuestion}
            color="primary"
            name={question_uuid}
            formControlProps={{ margin: "none" }}
            data={sub_response_content.map((item) => ({
              label: (
                <span style={titleStyle}>
                  <b>{item}</b>
                </span>
              ),
              value: item,
            }))}
          />
        </div>
      );
    case "CHECK_BOXES":
      return (
        <div style={{ marginTop: "1rem" }}>
          <h4 style={titleStyle}>{sub_question_content}</h4>
          <Radios
            name={question_uuid}
            disabled={!showSubQuestion}
            color="primary"
            formControlProps={{ margin: "none" }}
            radioGroupProps={{ row: false }}
            data={sub_response_content.map((item) => ({
              label: (
                <span style={titleStyle}>
                  <b>{item}</b>
                </span>
              ),
              value: item,
            }))}
          />
        </div>
      );
    case "DROPDOWN_MENU":
      return (
        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          <h4 style={titleStyle}>{sub_question_content}</h4>
          <Select
            isDisabled={!showSubQuestion}
            variant="outlined"
            name={question_uuid}
            formControlProps={{ margin: "none" }}
          >
            {sub_response_content.map((answer) => (
              <MenuItem value={answer}>{answer}</MenuItem>
            ))}
          </Select>
        </div>
      );

    case "NULL":
      return null;

    default:
      return null;
  }
};

export default SubQuestionElement;
