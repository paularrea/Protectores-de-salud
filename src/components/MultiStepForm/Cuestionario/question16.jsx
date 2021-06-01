import React from "react";
import ReactSelect from "../components/ReactSelect";

const Question16 = ({ questionaryData }) => {
  const options = questionaryData[15].response_content.map((item) => {
    return { value: item, label: item };
  });

  return (
    <ReactSelect options={options} name={questionaryData[15].question_uuid} />
  );
};

export default Question16;

