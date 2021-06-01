import React from "react";
import ReactSelect from "../components/ReactSelect";

const Question13 = ({ questionaryData }) => {
  const options = questionaryData[12].response_content.map((item) => {
    return { value: item, label: item };
  });

  return (
    <ReactSelect options={options} name={questionaryData[12].question_uuid} />
  );
};

export default Question13;
