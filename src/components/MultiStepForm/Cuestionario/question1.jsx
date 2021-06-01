import React from "react";
import Radio from "../components/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const Question1 = ({ questionaryData }) => {
  return (
    <RadioGroup
      aria-label="seguro-medico"
      name="seguro-medico"
    >
      {questionaryData[0].response_content.map((item) => {
        return (
          <Radio
            name={questionaryData[0].question_uuid}
            value={item}
            label={item}
          />
        );
      })}
    </RadioGroup>
  );
};

export default Question1;
