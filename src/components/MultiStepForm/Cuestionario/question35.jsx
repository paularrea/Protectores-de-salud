import React from "react";
import ReactSelect from "../components/ReactSelect";

const Question35 = ({ questionaryData }) => {
  const options = questionaryData[34].response_content.map((item) => {
    return { value: item, label: item };
  });

  return <ReactSelect options={options} name={questionaryData[34].question_uuid} />;
};

export default Question35;

