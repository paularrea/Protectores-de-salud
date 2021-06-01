import React from "react";
import Radio from "../components/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const Question6 = ({ questionaryData }) => {
  return (
    <>
      <RadioGroup aria-label="seguro-medico" name="seguro-medico">
        {questionaryData[5].response_content.map((item) => {
          return (
            <Radio
              name={questionaryData[5].question_uuid}
              value={item}
              label={item}
            />
          );
        })}
      </RadioGroup>
    </>
  );
};

export default Question6;
