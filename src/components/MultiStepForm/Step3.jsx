import React from "react";
import { Form } from "usetheform";
import styles from "./form.module.scss";
import step3 from "../../img/steps/step3.png";
import Element from "./components/element";

function Step3({ topRef, prevPage, ...props }) {
  if (props.step !== 3) {
    return null;
  }
  const cuestionario = props.questionaryData
    ? props.questionaryData.map((question, i) => (
        <Element key={i} question={question} />
      ))
    : null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <img src={step3} alt="step3" />
          <p>PASO {props.step}</p>
          <h2>Cuestionario</h2>
        </div>
      </div>
      <Form name="Step3" {...props}>
        <div className={styles.content}>{cuestionario}</div>
      </Form>
    </div>
  );
}

export default Step3;
