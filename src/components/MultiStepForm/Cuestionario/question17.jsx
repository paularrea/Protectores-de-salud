import React from "react";
import ReactSelect from "../components/ReactSelect";

const Question17 = ({ questionaryData }) => {
  const options = questionaryData[16].response_content.map((item) => {
    return { value: item, label: item };
  });

  return (
    <ReactSelect options={options} name={questionaryData[16].question_uuid} />
  );
};

export default Question17;
