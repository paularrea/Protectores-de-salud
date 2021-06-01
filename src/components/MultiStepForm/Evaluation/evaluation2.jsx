import React from "react";
import Radio from "../components/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const Evaluation2 = ({ evaluationData }) => {
  return (
    <RadioGroup
      aria-label="seguro-medico"
      name="seguro-medico"
    >
      {evaluationData[1].response_content.map((item) => {
        return (
          <Radio
            name={evaluationData[1].question_uuid}
            value={item}
            label={item}
          />
        );
      })}
    </RadioGroup>
  );
};

export default Evaluation2;
