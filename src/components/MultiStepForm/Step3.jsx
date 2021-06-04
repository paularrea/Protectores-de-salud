import React from "react";
import { Form } from "usetheform";
import styles from "./form.module.scss";
import step3 from "../../img/steps/step3.png"

import Question1 from "./Cuestionario/question1";
import Question2 from "./Cuestionario/question2";
import Question3 from "./Cuestionario/question3";
import Question4 from "./Cuestionario/question4";
import Question5 from "./Cuestionario/question5";
import Question6 from "./Cuestionario/question6";
import Question7 from "./Cuestionario/question7";
import Question8 from "./Cuestionario/question8";
import Question9 from "./Cuestionario/question9";
import Question10 from "./Cuestionario/question10";
import Question11 from "./Cuestionario/question11";
import Question12 from "./Cuestionario/question12";
import Question13 from "./Cuestionario/question13";
import Question14 from "./Cuestionario/question14";
import Question15 from "./Cuestionario/question15";
import Question16 from "./Cuestionario/question16";
import Question17 from "./Cuestionario/question17";
import Question18 from "./Cuestionario/question18";
import Question19 from "./Cuestionario/question19";
import Question20 from "./Cuestionario/question20";
import Question21 from "./Cuestionario/question21";
import Question22 from "./Cuestionario/question22";
import Question23 from "./Cuestionario/question23";
import Question24 from "./Cuestionario/question24";
import Question25 from "./Cuestionario/question25";
import Question26 from "./Cuestionario/question26";
import Question27 from "./Cuestionario/question27";
import Question28 from "./Cuestionario/question28";
import Question29 from "./Cuestionario/question29";
import Question30 from "./Cuestionario/question30";
import Question31 from "./Cuestionario/question31";
import Question32 from "./Cuestionario/question32";
import Question33 from "./Cuestionario/question33";
import Question34 from "./Cuestionario/question34";
import Question35 from "./Cuestionario/question35";
import Question36 from "./Cuestionario/question36";
import Question37 from "./Cuestionario/question37";
import Question38 from "./Cuestionario/question38";
import Question39 from "./Cuestionario/question39";

function Step3({ prevPage, ...props }) {
  if (props.step !== 3) {
    return null;
  }
  const questionaryData = props.questionaryData && props.questionaryData;
  console.log(questionaryData, "questionari");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <img src={step3} alt="step3" />
        <p>PASO {props.step}</p>
        <h2>Cuestionario</h2>
      </div>
      <Form name="Step3" {...props}>
        <div className={styles.content}>
          <section>
            <h3>{questionaryData[0].chapter_name}</h3>
            <p>{questionaryData[0].question_content}</p>
            <Question1 questionaryData={questionaryData} />
            <p>{questionaryData[1].question_content}</p>
            <Question2 questionaryData={questionaryData} />
            <p>{questionaryData[2].question_content}</p>
            <Question3 questionaryData={questionaryData} />
            <p>{questionaryData[3].question_content}</p>
            <Question4 questionaryData={questionaryData} />
          </section>
          <section>
            <h3>{questionaryData[4].chapter_name}</h3>
            <p>{questionaryData[4].question_content}</p>
            <Question5 questionaryData={questionaryData} />
            <p>{questionaryData[5].question_content}</p>
            <Question6 questionaryData={questionaryData} />
            <p>{questionaryData[6].question_content}</p>
            <Question7 questionaryData={questionaryData} />
            <p>{questionaryData[7].question_content}</p>
            <Question8 questionaryData={questionaryData} />
            <p>{questionaryData[8].question_content}</p>
            <Question9 questionaryData={questionaryData} />
            <p>{questionaryData[9].question_content}</p>
            <Question10 questionaryData={questionaryData} />
            <p>{questionaryData[10].question_content}</p>
            <Question11 questionaryData={questionaryData} />
            <p>{questionaryData[11].question_content}</p>
            <Question12 questionaryData={questionaryData} />
            <p>{questionaryData[12].question_content}</p>
            <Question13 questionaryData={questionaryData} />
            <p>{questionaryData[13].question_content}</p>
            <Question14 questionaryData={questionaryData} />
            <p>{questionaryData[14].question_content}</p>
            <Question15 questionaryData={questionaryData} />
            <p>{questionaryData[15].question_content}</p>
            <Question16 questionaryData={questionaryData} />
          </section>
          <section>
            <h3>{questionaryData[16].chapter_name}</h3>
            <p>{questionaryData[16].question_content}</p>
            <Question17 questionaryData={questionaryData} />
            <p>{questionaryData[17].question_content}</p>
            <Question18 questionaryData={questionaryData} />
            <p>{questionaryData[18].question_content}</p>
            <Question19 questionaryData={questionaryData} />
            <p>{questionaryData[19].question_content}</p>
            <Question20 questionaryData={questionaryData} />
            <p>{questionaryData[20].question_content}</p>
            <Question21 questionaryData={questionaryData} />
            <p>{questionaryData[21].question_content}</p>
            <Question22 questionaryData={questionaryData} />
            <p>{questionaryData[22].question_content}</p>
            <Question23 questionaryData={questionaryData} />
          </section>
          <section>
            <h3>{questionaryData[23].chapter_name}</h3>
            <p>{questionaryData[23].question_content}</p>
            <Question24 questionaryData={questionaryData} />
            <p>{questionaryData[24].question_content}</p>
            <Question25 questionaryData={questionaryData} />
            <p>{questionaryData[25].question_content}</p>
            <Question26 questionaryData={questionaryData} />
            <p>{questionaryData[26].question_content}</p>
            <Question27 questionaryData={questionaryData} />
          </section>
          <section>
            <h3>{questionaryData[27].chapter_name}</h3>
            <p>{questionaryData[27].question_content}</p>
            <Question28 questionaryData={questionaryData} />
            <p>{questionaryData[28].question_content}</p>
            <Question29 questionaryData={questionaryData} />
            <p>{questionaryData[29].question_content}</p>
            <Question30 questionaryData={questionaryData} />
            <p>{questionaryData[30].question_content}</p>
            <Question31 questionaryData={questionaryData} />
          </section>
          <section>
            <h3>{questionaryData[31].chapter_name}</h3>
            <p>{questionaryData[31].question_content}</p>
            <Question32 questionaryData={questionaryData} />
            <p>{questionaryData[32].question_content}</p>
            <Question33 questionaryData={questionaryData} />
            <p>{questionaryData[33].question_content}</p>
            <Question34 questionaryData={questionaryData} />
            <p>{questionaryData[34].question_content}</p>
            <Question35 questionaryData={questionaryData} />
            <p>{questionaryData[35].question_content}</p>
            <Question36 questionaryData={questionaryData} />
            <p>{questionaryData[36].question_content}</p>
            <Question37 questionaryData={questionaryData} />
            <p>{questionaryData[37].question_content}</p>
            <Question38 questionaryData={questionaryData} />
            <p>{questionaryData[38].question_content}</p>
            <Question39 questionaryData={questionaryData} />
          </section>
        </div>
      </Form>
    </div>
  );
}

export default Step3;
