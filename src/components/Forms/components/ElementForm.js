import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { TextField} from "formik-material-ui";
import styles from "../form.module.scss";
import "../form.css";
import SubQuestionElement from "./SubQuestionElement";

const Element = ({
  question: {
    chapter_name,
    question_id,
    question_content,
    response_type,
    response_content,
    sub_question_id,
    sub_question_content,
    sub_response_type,
    sub_response_content,
  },
}) => {
  const [showSubQuestion, setShowSubQuestion] = useState(false);

  const subQuestion =
    sub_question_content !== "NULL" ? (
      <SubQuestionElement
        name={sub_question_id}
        showSubQuestion={showSubQuestion}
        sub_question_id={sub_question_id}
        sub_response_type={sub_response_type}
        sub_response_content={sub_response_content}
        sub_question_content={sub_question_content}
      />
    ) : null;

  const handleChangeRadio = (event) => {
    event.target.value === "Si" && setShowSubQuestion(true);
    event.target.value !== "Si" && setShowSubQuestion(false);
  };

  switch (response_type) {
    case "UNIQUE":
      return (
        <div style={{ margin: "1rem 0 2rem 0" }}>
          <ErrorMessage
            name={question_id}
            component="div"
            className={styles.error_message}
          />
          <h4 className={styles.question_title}>{question_content}</h4>
          <div
            role="group"
            aria-labelledby="radio-group"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {response_content.map((answer, key) => (
              <label
                key={key}
                style={{
                  cursor: "pointer",
                  marginBottom: "1rem",
                }}
                onChange={handleChangeRadio}
              >
                <Field
                  style={{
                    cursor: "pointer",
                    margin: "0 1rem 0 0",
                    width: "18px",
                    height: "18px",
                  }}
                  type="radio"
                  name={question_id}
                  value={answer}
                />
                {answer}
              </label>
            ))}
          </div>
          {subQuestion}
        </div>
      );
    // case "DROPDOWN_MENU":
    //   return (
    //     <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
    //       <ErrorMessage
    //         name={question_id}
    //         component="div"
    //         className={styles.error_message}
    //       />
    //       <h4 className={styles.question_title}>{question_content}</h4>
    //       <Field
    //         type="select"
    //         variant="outlined"
    //         style={{ width: "100%" }}
    //         component={Select}
    //         name={question_id}
    //         MenuProps={{
    //           PaperProps: {
    //             style: {
    //               transform: "translate3d(0, 0, 0)",
    //             },
    //           },
    //         }}
    //       >
    //         {response_content.map((answer, key) => (
    //           <MenuItem key={key} value={answer}>
    //             {answer}
    //           </MenuItem>
    //         ))}
    //       </Field>
    //       {subQuestion}
    //     </div>
    //   );
    case "EDITABLE":
      return (
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          {/* <ErrorMessage
            name={question_id}
            component="div"
            className={styles.error_message}
          /> */}
          <h4 className={styles.question_title}>{question_content}</h4>
          <Field
            type="text"
            variant="outlined"
            multiline
            rowsMax={4}
            name={question_id}
            margin="none"
            component={TextField}
          />
        </div>
      );
    case "MULTI":
      return (
        <div style={{ margin: "1rem 0 2rem 0" }}>
          <ErrorMessage
            name={question_id}
            component="div"
            className={styles.error_message}
          />
          <h4 className={styles.question_title}>{question_content}</h4>
          <div
            className="checkbox-group"
            role="group"
            aria-labelledby="checkbox-group"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {response_content.map((answer, key) => (
              <label
                key={key}
                style={{
                  cursor: "pointer",
                  marginBottom: "1rem",
                }}
              >
                <Field
                  style={{
                    cursor: "pointer",
                    margin: "0 1rem 0 0",
                    width: "16px",
                    height: "16px",
                  }}
                  type="checkbox"
                  className={styles.checkbox_form}
                  name={question_id}
                  value={answer}
                />
                {answer}
                <span></span>
              </label>
            ))}
          </div>
          {subQuestion}
        </div>
      );
    default:
      return null;
  }
};

export default Element;
