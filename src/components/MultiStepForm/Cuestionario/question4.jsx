import React from "react";
import styles from "../form.module.scss"
import TextField from "../components/TextField";

const Question4 = ({questionaryData}) => {
  return <TextField className={styles.input} id={questionaryData[3].question_uuid} name={questionaryData[3].question_uuid} variant="outlined" />;
};

export default Question4;
