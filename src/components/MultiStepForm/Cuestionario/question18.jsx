import React from "react";
import Radio from "../components/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const Question18 = ({ questionaryData }) => {
  return (
    <RadioGroup
    >
      {questionaryData[17].response_content.map((item) => {
        return (
          <Radio
            name={questionaryData[17].question_uuid}
            value={item}
            label={item}
          />
        );
      })}
    </RadioGroup>
  );
};

export default Question18;
