import React from "react";
import Radio from "../components/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const Question19 = ({ questionaryData }) => {
  return (
    <RadioGroup
    >
      {questionaryData[18].response_content.map((item) => {
        return (
          <Radio
            name={questionaryData[18].question_uuid}
            value={item}
            label={item}
          />
        );
      })}
    </RadioGroup>
  );
};

export default Question19;
