import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "../form.module.scss";

const Question2 = ({ questionaryData }) => {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl className={styles.input} variant="outlined">
      <InputLabel>Seguro médico</InputLabel>
      <Select
        labelId={questionaryData[1].question_uuid}
        id={questionaryData[1].question_uuid}
        value={value}
        onChange={handleChange}
        label="Seleccione el tipo de seguro"
      >
        {questionaryData[1].response_content.map((item, key) => {
          return <MenuItem key={key} value={item}>{item}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default Question2;