import React from "react";
import Radio from "../components/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const Question21 = ({ questionaryData }) => {
  return (
    <RadioGroup
    >
      {questionaryData[20].response_content.map((item) => {
        return (
          <Radio
            name={questionaryData[20].question_uuid}
            value={item}
            label={item}
          />
        );
      })}
    </RadioGroup>
  );
};

export default Question21;
