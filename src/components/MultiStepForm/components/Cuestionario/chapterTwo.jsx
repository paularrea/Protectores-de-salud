import React, { useState } from "react";
import styles from "../../form.module.scss";
import hide from "../../../../img/arrow-up.png";
import show from "../../../../img/arrow-up.png";

import Question5 from "../../Cuestionario/question5";
import Question6 from "../../Cuestionario/question6";
import Question7 from "../../Cuestionario/question7";
import Question8 from "../../Cuestionario/question8";
import Question9 from "../../Cuestionario/question9";
import Question10 from "../../Cuestionario/question10";
import Question11 from "../../Cuestionario/question11";
import Question12 from "../../Cuestionario/question12";
import Question13 from "../../Cuestionario/question13";
import Question14 from "../../Cuestionario/question14";
import Question15 from "../../Cuestionario/question15";
import Question16 from "../../Cuestionario/question16";

const ChapterTwo = ({ questionaryData }) => {
  const [open, setOpen] = useState(false);

  const openClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.flex_dropdown} onClick={openClose}>
        <div>
          <h3>{questionaryData[4].chapter_name}</h3>
        </div>
        {open ? (
          <div className={styles.icon_hide}>
            <img src={hide} alt="ver menos" />
          </div>
        ) : (
          <div className={styles.icon_show}>
            <img src={show} alt="ver más" />
          </div>
        )}
      </div>
      {open && (
        <section>
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
      )}
    </>
  );
};

export default ChapterTwo;
