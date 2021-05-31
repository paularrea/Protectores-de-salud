import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";

const Question31 = ({ questionaryData }) => {
  const [isChecked, setIsChecked] = useState(
    questionaryData[30].response_content.slice().fill(false)
  );

  const toggleCheckboxValue = (index) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
  };

  return (
      <FormControl id={questionaryData[30].question_uuid} component="fieldset">
        <FormGroup>
          {questionaryData[30].response_content.map((item, key) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value={item}
                    selected={item}
                    key={key}
                    name={item}
                    checked={isChecked[key]}
                    onClick={() => toggleCheckboxValue(key)}
                  />
                }
                label={item}
              />
            );
          })}
        </FormGroup>
      </FormControl>
  );
};

export default Question31;
