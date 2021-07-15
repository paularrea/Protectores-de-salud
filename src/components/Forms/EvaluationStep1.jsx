import React from "react";
import styles from "./form.module.scss";
import step1 from "../../img/steps/step1.png";
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
        <div ref={props.topRef} className={styles.content}>
          <section>{evaluation}</section>
        </div>
      </div>
    </>
  );
};

EvaluationStep1.label = "Evaluación de la intervención";
EvaluationStep1.Img = step1;

export default EvaluationStep1;
