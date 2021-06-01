import React  from "react";
import Checkbox from "../components/Checkbox";
import FormControl from "@material-ui/core/FormControl";

const Evaluation3 = ({ evaluationData }) => {
  return (
    <FormControl component="fieldset">
      {evaluationData[2].response_content.map((item, key) => {
        return (
          <Checkbox
            key={key}
            name={evaluationData[2].question_uuid + item}
            label={item}
          />
        );
      })}
    </FormControl>
  );
};

export default Evaluation3;
