import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";

const Question39 = ({ questionaryData }) => {
  const [value, setValue] = useState();
  const [isChecked, setIsChecked] = useState(
    questionaryData[38].response_content.slice().fill(false)
  );

  const toggleCheckboxValue = (index) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <RadioGroup
        aria-label="seguro-medico"
        name="seguro-medico"
        value={value}
        onChange={handleChange}
        id={questionaryData[38].question_uuid}
      >
        {questionaryData[38].response_content.map((item, key) => {
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

      <br />

      <p>{questionaryData[38].sub_question_content}</p>
      <FormControl component="fieldset">
        <FormGroup>
          {questionaryData[38].sub_response_content.map((item, key) => {
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
    </>
  );
};

export default Question39;
