import React from "react";
import styles from "../form.module.scss";
import TextField from "../components/TextField";

const TextFieldQuestion = ({ questionaryData }) => {
  const singleTextFieldQuestion = questionaryData.map((question) => {
    const content = question.question_content;
    const isTextField =
      question.response_style === "EDITABLE" &&
      question.response_type === "EDITABLE";
    return (
      <>
        <p>{isTextField && content}</p>
        <div>
          {isTextField && (
            <TextField
              className={styles.input}
              id={question.question_uuid}
              name={question.question_uuid}
              variant="outlined"
            />
          )}
        </div>
      </>
    );
  });

  return singleTextFieldQuestion;
};

export default TextFieldQuestion;
