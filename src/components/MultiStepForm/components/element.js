import React from "react";
import Checkbox from "./Checkbox";
import Select from "./ReactSelect";
import TextField from "./TextField";
import Radio from "./Radio";

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
  switch (response_style) {
    case "CHECK_BOXES":
      return (
        <Radio
          chapter_name={chapter_name}
          question_uuid={question_uuid}
          question_content={question_content}
          response_type={response_type}
          response_style={response_style}
          response_content={response_content}
          sub_question_content={sub_question_content}
          sub_response_type={sub_response_type}
          sub_response_style={sub_response_style}
          sub_response_content={sub_response_content}
        />
      );
    case "DROPDOWN_MENU":
      return (
        <Select
          chapter_name={chapter_name}
          question_uuid={question_uuid}
          question_content={question_content}
          response_type={response_type}
          response_style={response_style}
          response_content={response_content}
          sub_question_content={sub_question_content}
          sub_response_type={sub_response_type}
          sub_response_style={sub_response_style}
          sub_response_content={sub_response_content}
        />
      );
    case "EDITABLE":
      return (
        <TextField
          chapter_name={chapter_name}
          question_uuid={question_uuid}
          question_content={question_content}
          response_type={response_type}
          response_style={response_style}
          response_content={response_content}
          sub_question_content={sub_question_content}
          sub_response_type={sub_response_type}
          sub_response_style={sub_response_style}
          sub_response_content={sub_response_content}
        />
      );
    case "MULTI_BOXES":
      return (
        <Checkbox
          chapter_name={chapter_name}
          question_uuid={question_uuid}
          question_content={question_content}
          response_type={response_type}
          response_style={response_style}
          response_content={response_content}
          sub_question_content={sub_question_content}
          sub_response_type={sub_response_type}
          sub_response_style={sub_response_style}
          sub_response_content={sub_response_content}
        />
      );
    default:
      return null;
  }
};

export default Element;
