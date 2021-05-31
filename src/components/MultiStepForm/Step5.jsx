import React, { useEffect } from "react";import styles from "./form.module.scss";

import Evaluation1 from "./Evaluation/evaluation1"
import Evaluation2 from "./Evaluation/evaluation2"
import Evaluation3 from "./Evaluation/evaluation3"

function Step5(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (props.currentStep !== 5) {
    return null;
  }
  const evaluationData = props.evaluationData && props.evaluationData;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>PASO {props.currentStep}</p>
        <h2>Evaluación de la intervención</h2>
      </div>
      <div className={styles.content}>
        <section>
          <p>{evaluationData[0].question_content}</p>
          <Evaluation1 evaluationData={evaluationData} />
          <p>{evaluationData[1].question_content}</p>
          <Evaluation2 evaluationData={evaluationData} />
          <p>{evaluationData[2].question_content}</p>
          <Evaluation3 evaluationData={evaluationData} />
        </section>
      </div>
    </div>
  );
}

export default Step5;
