import React from "react";
import ReactSelect from "../components/ReactSelect";

const Question38 = ({ questionaryData }) => {
  const options = questionaryData[37].response_content.map((item) => {
    return { value: item, label: item };
  });

  return <ReactSelect options={options} name={questionaryData[37].question_uuid} />;
};

export default Question38;

