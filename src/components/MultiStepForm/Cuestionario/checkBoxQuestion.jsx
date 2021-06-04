import React from "react";
import Checkbox from "../components/Checkbox";
import FormControl from "@material-ui/core/FormControl";

const CheckBoxQuestion = ({ questionaryData }) => {
  const singleCheckboxQuestion = questionaryData.map((question) => {
    const content = question.response_content;
    const isCheckbox =
      question.response_style === "CHECK_BOXES" &&
      question.response_type === "MULTI";
    console.log(content, "radio");
    return (
      <FormControl>
        <p>{isCheckbox && question.question_content}</p>
        <div>
          {isCheckbox &&
            content.map((item) => {
              return (
                <Checkbox
                  name={question.question_uuid + item}
                  value={item}
                  label={item}
                />
              );
            })}
        </div>
      </FormControl>
    );
  });

  return singleCheckboxQuestion;
};

export default CheckBoxQuestion;
