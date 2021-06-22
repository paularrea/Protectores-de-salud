import React from "react";
import { Form } from "usetheform";
import styles from "./form.module.scss";
import step3 from "../../img/steps/step3.png";

import ChapterOne from "./components/Cuestionario/chapterOne";
import ChapterTwo from "./components/Cuestionario/chapterTwo";
import ChapterThree from "./components/Cuestionario/chapterThree";
import ChapterFour from "./components/Cuestionario/chapterFour";
import ChapterFive from "./components/Cuestionario/chapterFive";
import ChapterSix from "./components/Cuestionario/chapterSix";

function Step3({ prevPage, ...props }) {
  if (props.step !== 3) {
    return null;
  }
  const questionaryData = props.questionaryData && props.questionaryData;

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
        <div className={styles.content}>
          <ChapterOne questionaryData={questionaryData} />
          <ChapterTwo questionaryData={questionaryData} />
          <ChapterThree questionaryData={questionaryData} />
          <ChapterFour questionaryData={questionaryData} />
          <ChapterFive questionaryData={questionaryData} />
          <ChapterSix questionaryData={questionaryData} />
        </div>
      </Form>
    </div>
  );
}

export default Step3;
