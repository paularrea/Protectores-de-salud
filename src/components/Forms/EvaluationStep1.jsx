import React from "react";
import styles from "./form.module.scss";
import evaluationStep1 from "../../img/steps/step5.png";
import Element from "./components/ElementForm";

function EvaluationStep1(props) {
  if (props.step !== 1) {
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
        <div className={styles.fixed_header}>
          <div className={styles.header}>
            <div>
              <img src={evaluationStep1} alt="evaluationStep1" />
              <p>PASO {props.step}</p>
              <h2>Evaluación de la intervención</h2>
            </div>
          </div>
        </div>

        <div ref={props.topRef} className={styles.content}>
          <section>{evaluation}</section>
        </div>
      </div>
    </>
  );
}

export default EvaluationStep1;
