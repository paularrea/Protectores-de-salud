import React from "react";
import ReactSelect from "../components/ReactSelect";

const SelectQuestion = ({ questionaryData }) => {
  const singleSelectQuestion = questionaryData.map((question) => {
    const isSelect =
    question.response_style === "DROPDOWN_MENU" &&
    question.response_type === "UNIQUE";
  
    const options = isSelect && question.response_content.map((item) => {
      return { value: item, label: item };  
    });

    return (
      <div>
        <p>{isSelect && question.question_content}</p>
        <ReactSelect options={options} name={question.question_uuid} />
      </div>
    );
  });

  return singleSelectQuestion;
};

export default SelectQuestion;
