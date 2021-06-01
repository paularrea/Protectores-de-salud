import React from "react";
import Radio from "../components/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const Question22 = ({ questionaryData }) => {
  return (
    <RadioGroup
    >
      {questionaryData[21].response_content.map((item) => {
        return (
          <Radio
            name={questionaryData[21].question_uuid}
            value={item}
            label={item}
          />
        );
      })}
    </RadioGroup>
  );
};

export default Question22;
