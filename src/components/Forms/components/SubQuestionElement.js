import React from "react";
import { Field } from "formik";
import styles from "../form.module.scss";
import { TextField } from "formik-material-ui";

const SubQuestionElement = ({
  showSubQuestion,
  sub_question_id,
  sub_question_content,
  sub_response_type,
  sub_response_content,
}) => {
  const titleStyle = {
    color: !showSubQuestion ? "#C5C5C5" : "black",
    fontWeight: 400,
    marginBottom: "1rem",
  };

  switch (sub_response_type) {
    case "EDITABLE":
      return (
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <h4 style={titleStyle}>{sub_question_content}</h4>
          <Field
            disabled={!showSubQuestion}
            variant="outlined"
            name={sub_question_id}
            margin="none"
            component={TextField}
          />
        </div>
      );
    case "MULTI":
      return (
        <div style={{ marginTop: "1rem" }}>
          <h4 style={titleStyle}>{sub_question_content}</h4>
          <div
            role="group"
            aria-labelledby="checkbox-group"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {sub_response_content.map((answer, key) => (
              <label
                key={key}
                style={{
                  cursor: "pointer",
                  marginBottom: "1rem",
                  color: !showSubQuestion ? "#C5C5C5" : "black",
                }}
              >
                <Field
                  disabled={!showSubQuestion}
                  style={{
                    cursor: "pointer",
                    margin: "0 1rem 0 0",
                    width: "16px",
                    height: "16px",
                  }}
                  type="checkbox"
                  className={styles.checkbox_form}
                  name={sub_question_id}
                  value={answer}
                />
                {answer}
              </label>
            ))}
          </div>
        </div>
      );
    case "UNIQUE":
      return (
        <div style={{ marginTop: "1rem" }}>
          <h4 style={titleStyle}>{sub_question_content}</h4>
          <div
            role="group"
            aria-labelledby="radio-group"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {sub_response_content.map((answer, key) => (
              <label
                key={key}
                style={{
                  cursor: "pointer",
                  marginBottom: "1rem",
                }}
              >
                <Field
                  disabled={!showSubQuestion}
                  style={{
                    cursor: "pointer",
                    margin: "0 1rem 0 0",
                    width: "18px",
                    height: "18px",
                  }}
                  type="radio"
                  name={sub_question_id}
                  value={answer}
                />
                {answer}
              </label>
            ))}
          </div>
        </div>
      );
    // case "DROPDOWN_MENU":
    //   return (
    //     <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
    //       <h4 style={titleStyle}>{sub_question_content}</h4>
    //       <Field
    //         isDisabled={!showSubQuestion}
    //         variant="outlined"
    //         style={{ width: "100%" }}
    //         component={Select}
    //         name={sub_question_id}
    //         MenuProps={{
    //           PaperProps: {
    //             style: {
    //               transform: 'translate3d(0, 0, 0)'
    //             }
    //           }
    //         }}
    //       >
    //         {sub_response_content.map((answer, key) => (
    //           <MenuItem key={key} value={answer}>
    //             {answer}
    //           </MenuItem>
    //         ))}
    //       </Field>
    //     </div>
    //   );

    case "NULL":
      return null;

    default:
      return null;
  }
};

export default SubQuestionElement;
