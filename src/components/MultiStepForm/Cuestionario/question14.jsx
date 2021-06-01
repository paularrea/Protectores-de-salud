import React from "react";
import ReactSelect from "../components/ReactSelect";

const Question14 = ({ questionaryData }) => {
  const options = questionaryData[13].response_content.map((item) => {
    return { value: item, label: item };
  });
  const subOptions = questionaryData[13].sub_response_content.map((item) => {
    return { value: item, label: item };
  });

  return (
    <>
      <ReactSelect options={options} name={questionaryData[13].question_uuid} />
      <br />
      <p>{questionaryData[13].sub_question_content}</p>
      <ReactSelect
        options={subOptions}
        name={questionaryData[13].question_uuid + questionaryData[13].sub_question_content}
      />
    </>
  );
};

export default Question14;
