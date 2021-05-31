import React from "react";
import styles from "../form.module.scss"
import TextField from "@material-ui/core/TextField";

const Question4 = ({questionaryData}) => {
  return <TextField className={styles.input} id={questionaryData[36].question_uuid} label="Nombre médico primario" variant="outlined" />;
};

export default Question4;
