import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "../form.module.scss";

const Question20 = ({ questionaryData }) => {
  const [value, setValue] = useState();
  const [valueSub, setValueSub] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
    setValueSub(event.target.value);
  };

  return (
    <>
      <RadioGroup
        aria-label="seguro-medico"
        name="seguro-medico"
        value={value}
        onChange={handleChange}
        id={questionaryData[19].question_uuid}
      >
        {questionaryData[19].response_content.map((item, key) => {
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

      <p>{questionaryData[19].sub_question_content}</p>
      <FormControl className={styles.input} variant="outlined">
        <InputLabel>Seleccione</InputLabel>
        <Select value={valueSub} onChange={handleChange} label="Seleccione">
          {questionaryData[19].sub_response_content.map((item, key) => {
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

export default Question20;
