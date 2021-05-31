import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "../form.module.scss";

const Question3 = ({ questionaryData }) => {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <FormControl className={styles.input} variant="outlined">
        <InputLabel>Compañía de seguros</InputLabel>
        <Select
          labelId={questionaryData[2].question_uuid}
          id={questionaryData[2].question_uuid}
          value={value}
          onChange={handleChange}
          label="Compañía de seguros"
        >
          {questionaryData[2].response_content.map((item, key) => {
            return (
              <MenuItem key={key} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
  );
};

export default Question3;
