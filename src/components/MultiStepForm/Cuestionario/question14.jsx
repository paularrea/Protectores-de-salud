import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "../form.module.scss";

const Question14 = ({ questionaryData }) => {
  const [value, setValue] = useState();
  const [valueSub, setValueSub] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
    setValueSub(event.target.value);
  };

  return (
    <>
      <FormControl className={styles.input} variant="outlined">
        <InputLabel>Seleccione</InputLabel>
        <Select
          labelId={questionaryData[13].question_uuid}
          id={questionaryData[13].question_uuid}
          value={value}
          onChange={handleChange}
          label="Seleccione"
        >
          {questionaryData[13].response_content.map((item, key) => {
            return (
              <MenuItem key={key} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <br />

      <p>{questionaryData[13].sub_question_content}</p>
      <FormControl className={styles.input} variant="outlined">
        <InputLabel>Seleccione</InputLabel>
        <Select value={valueSub} onChange={handleChange} label="Seleccione">
          {questionaryData[13].sub_response_content.map((item, key) => {
            return (
              <MenuItem key={key} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default Question14;
