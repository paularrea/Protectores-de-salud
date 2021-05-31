import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Evaluation2 = ({ evaluationData }) => {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <RadioGroup
      aria-label="seguro-medico"
      name="seguro-medico"
      value={value}
      onChange={handleChange}
      id={evaluationData[1].question_uuid}
    >
      {evaluationData[1].response_content.map((item, key) => {
        return (
          <FormControlLabel
            key={key}
            value={item}
            control={<Radio color="primary" />}
            label={item}
          />
        );
      })}
    </RadioGroup>
  );
};

export default Evaluation2;
