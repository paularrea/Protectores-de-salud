import React from "react";
import { Form } from "usetheform";
import styles from "./form.module.scss";
import step5 from "../../img/steps/step5.png";
import Element from "./components/element"

function Step5(props) {
  if (props.step !== 5) {
    return null;
  }

  const evaluation = props.evaluationData
    ? props.evaluationData.map((question, i) => (
        <Element key={i} question={question} />
      ))
    : null;

  return (
    <>
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <img src={step5} alt="step5" />
          <p>PASO {props.step}</p>
          <h2>Evaluación de la intervención</h2>
        </div>
      </div>
      <Form name="Step5" {...props}>
        <div className={styles.content}>
          <section>{evaluation}</section>
        </div>
      </Form>
    </div>
    </>
  );
}

export default Step5;
