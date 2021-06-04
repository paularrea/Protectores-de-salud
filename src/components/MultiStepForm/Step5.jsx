import React from "react";
import { Form } from "usetheform";
import styles from "./form.module.scss";
import step5 from "../../img/steps/step5.png"

import Evaluation1 from "./Evaluation/evaluation1"
import Evaluation2 from "./Evaluation/evaluation2"
import Evaluation3 from "./Evaluation/evaluation3"

function Step5(props) {

  if (props.step !== 5) {
    return null;
  }
  const evaluationData = props.evaluationData && props.evaluationData;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <img src={step5} alt="step5" />
      <p>PASO {props.step}</p>
        <h2>Evaluación de la intervención</h2>
      </div>
      <Form name="Step5" {...props}>
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
      </Form>
    </div>
  );
}

export default Step5;
