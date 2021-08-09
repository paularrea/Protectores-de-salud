import React from "react";
import { Field, ErrorMessage } from "formik";
import "./form.css";
import styles from "./form.module.scss";
import step1 from "../../img/steps/step1.png";
import * as Yup from "yup";

const response = ['Sí', 'No']
const Step5 = ({ refProp }) => {
  
  const newInterventionSuggestion = (
    <div style={{ margin: "1rem 0 2rem 0" }}>
    <ErrorMessage
      name='interventionSuggestion'
      component="div"
      className={styles.error_message}
    />
    <h4 className={styles.question_title}>¿Desea sugerir una nueva intervención?</h4>
    <div
      role="group"
      aria-labelledby="radio-group"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {response.map((answer, key) => (
        <label
          key={key}
          style={{
            cursor: "pointer",
            marginBottom: "1rem",
            fontWeight: 700,
          }}
        >
          <Field
            style={{
              cursor: "pointer",
              margin: "0 1rem 0 0",
              width: "18px",
              height: "18px",
            }}
            type="radio"
            name='interventionSuggestion'
            value={answer}
          />
          {answer}
        </label>
      ))}
    </div>
  </div>
  );

  return (
    <div className={styles.container}>
      <div ref={refProp} className={styles.form_content}>
        <div className={styles.content}>
          {newInterventionSuggestion.props.children}
        </div>
      </div>
    </div>
  );
};

Step5.label = "Sugerir próxima intervención";

Step5.validationSchema = Yup.object().shape({
  interventionSuggestion: Yup.string().required("Campo Obligatorio"),
});

Step5.Img = step1;

export default Step5;
