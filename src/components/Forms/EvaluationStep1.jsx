import React from "react";
import styles from "./form.module.scss";
// import * as Yup from "yup";
import { Field } from "formik";
import { TextField } from "formik-material-ui";

import step1 from "../../img/steps/evaluation-step1.png";
import Element from "./components/ElementForm";

const EvaluationStep1 = (props) => {
  const evaluation = props.evaluationData
    ? props.evaluationData.map((question, i) => (
        <Element key={i} question={question} />
      ))
    : null;

  return (
    <>
      <div className={styles.container}>
        <div ref={props.refProp} className={styles.content}>
          <section>{evaluation}</section>
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <h4 className={styles.question_title}>Observaciones</h4>
          <Field
            type="text"
            variant="outlined"
            multiline
            rowsMax={4}
            name='observaciones'
            margin="none"
            component={TextField}
          />
        </div>
        </div>
      </div>
    </>
  );
};

EvaluationStep1.label = "Evaluación de la intervención";
EvaluationStep1.initialValues = {
  e1:'',
  e2:'',
  e3:'',
  e4:'',
  e5:'',
  e6:'',
  e7:'',
  e8:'',
}
EvaluationStep1.Img = step1;
// EvaluationStep1.validationSchema = Yup.object().shape({
//   e1: Yup.string().required("Campo Obligatorio"),
//   e2: Yup.string().required("Campo Obligatorio"),
//   e3: Yup.array().required("Campo Obligatorio"),
//   e4: Yup.string().required("Campo Obligatorio"),
//   e5: Yup.string().required("Campo Obligatorio"),
//   e6: Yup.array().required("Campo Obligatorio"),
//   e7: Yup.string().required("Campo Obligatorio"),
//   e8: Yup.string().required("Campo Obligatorio"),
// })

export default EvaluationStep1;
