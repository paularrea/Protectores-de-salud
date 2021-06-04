import React from "react";
import ReactSelect from "../components/ReactSelect";

const Question2 = ({ questionaryData }) => {
  const options = questionaryData[1].response_content.map((item) => {
    return { value: item, label: item };
  });
  return <ReactSelect options={options} name={questionaryData[1].question_uuid} />;
};
export default Question2;
