import React from "react";
import Radio from "../components/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "../components/Checkbox";
import FormControl from "@material-ui/core/FormControl";

const Question26 = ({ questionaryData }) => {
  return (
    <>
      <RadioGroup aria-label="seguro-medico" name="seguro-medico">
        {questionaryData[25].response_content.map((item) => {
          return (
            <Radio
              name={questionaryData[25].question_uuid}
              value={item}
              label={item}
            />
          );
        })}
      </RadioGroup>

      <br />

      <p>{questionaryData[25].sub_question_content}</p>
      <FormControl component="fieldset">
        {questionaryData[25].sub_response_content.map((item, key) => {
          return (
            <Checkbox
              key={key}
              name={questionaryData[25].question_uuid + item}
              label={item}
            />
          );
        })}
      </FormControl>
    </>
  );
};

export default Question26;
