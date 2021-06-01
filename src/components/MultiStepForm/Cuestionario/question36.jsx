import React from "react";
import ReactSelect from "../components/ReactSelect";

const Question36 = ({ questionaryData }) => {
  const options = questionaryData[35].response_content.map((item) => {
    return { value: item, label: item };
  });

  return <ReactSelect options={options} name={questionaryData[35].question_uuid} />;
};

export default Question36;

