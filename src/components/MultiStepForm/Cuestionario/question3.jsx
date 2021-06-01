import React from "react";
import ReactSelect from "../components/ReactSelect";

const Question2 = ({ questionaryData }) => {
  const options = questionaryData[2].response_content.map((item) => {
    return { value: item, label: item, color: "black" };
  });

  return <ReactSelect options={options} name={questionaryData[2].question_uuid} />;
};

export default Question2;
