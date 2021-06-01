import React  from "react";
import Checkbox from "../components/Checkbox";
import FormControl from "@material-ui/core/FormControl";

const Question25 = ({ questionaryData }) => {
  return (
    <FormControl component="fieldset">
      {questionaryData[24].response_content.map((item, key) => {
        return (
          <Checkbox
            key={key}
            name={questionaryData[24].question_uuid + item}
            label={item}
          />
        );
      })}
    </FormControl>
  );
};

export default Question25;
