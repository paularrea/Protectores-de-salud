import React  from "react";
import Checkbox from "../components/Checkbox";
import FormControl from "@material-ui/core/FormControl";

const Question32 = ({ questionaryData }) => {
  return (
    <FormControl component="fieldset">
      {questionaryData[31].response_content.map((item, key) => {
        return (
          <Checkbox
            key={key}
            name={questionaryData[31].question_uuid + item}
            label={item}
          />
        );
      })}
    </FormControl>
  );
};

export default Question32;
