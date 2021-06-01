import React from "react";
import ReactSelect from "../components/ReactSelect";

const Question15 = ({ questionaryData }) => {
  const options = questionaryData[14].response_content.map((item) => {
    return { value: item, label: item };
  });

  return (
    <ReactSelect options={options} name={questionaryData[14].question_uuid} />
  );
};

export default Question15;
