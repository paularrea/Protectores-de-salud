import React from "react";
import ReactSelect from "../components/ReactSelect";

const Question12 = ({ questionaryData }) => {
  const options = questionaryData[11].response_content.map((item) => {
    return { value: item, label: item };
  });

  return (
    <ReactSelect options={options} name={questionaryData[11].question_uuid} />
  );
};

export default Question12;
