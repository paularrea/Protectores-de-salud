import React from "react";
import Radio from "../components/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const RadioQuestion = ({ questionaryData }) => {
  const singleRadioQuestion = questionaryData.map((question) => {
      const content = question.response_content;
      const isRadio = question.response_style === 'CHECK_BOXES' && question.response_type === 'UNIQUE';
    return (
      <RadioGroup>
        <p>{isRadio && question.question_content}</p>
        <div>
          {isRadio && content.map((item) => {
            return (
              <Radio name={question.question_uuid} value={item} label={item} />
            );
          })}
        </div>
      </RadioGroup>
    );
  });

  return singleRadioQuestion;
};

export default RadioQuestion;
