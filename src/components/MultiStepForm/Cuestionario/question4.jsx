import React from "react";
import styles from "../form.module.scss"
import TextField from "@material-ui/core/TextField";

const Question4 = ({questionaryData}) => {
  return <TextField className={styles.input} id={questionaryData[3].question_uuid} label="Número de contrato" variant="outlined" />;
};

export default Question4;
