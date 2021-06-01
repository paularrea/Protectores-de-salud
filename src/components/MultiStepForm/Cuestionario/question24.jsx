import React from "react";
import Radio from "../components/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "../components/Checkbox";
import FormControl from "@material-ui/core/FormControl";

const Question24 = ({ questionaryData }) => {
  return (
    <>
      <RadioGroup aria-label="seguro-medico" name="seguro-medico">
        {questionaryData[23].response_content.map((item) => {
          return (
            <Radio
              name={questionaryData[23].question_uuid}
              value={item}
              label={item}
            />
          );
        })}
      </RadioGroup>

      <br />

      <p>{questionaryData[23].sub_question_content}</p>
      <FormControl component="fieldset">
        {questionaryData[23].sub_response_content.map((item, key) => {
          return (
            <Checkbox
              key={key}
              name={questionaryData[23].question_uuid + item}
              label={item}
            />
          );
        })}
      </FormControl>
    </>
  );
};

export default Question24;
