import React from "react";
import styles from "../form.module.scss"
import TextField from "../components/TextField";

const Question367 = ({questionaryData}) => {
  return <TextField className={styles.input} id={questionaryData[36].question_uuid} name={questionaryData[36].question_uuid}  variant="outlined" />;
};

export default Question367;
