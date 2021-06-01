import React from "react";
import Checkbox from "../components/Checkbox";
import FormControl from "@material-ui/core/FormControl";

const Question23 = ({ questionaryData }) => {
  return (
    <FormControl component="fieldset">
      {questionaryData[22].response_content.map((item, key) => {
        return (
          <Checkbox
            key={key}
            name={questionaryData[22].question_uuid + item}
            label={item}
          />
        );
      })}
    </FormControl>
  );
};

export default Question23;
