import React, { useState } from "react";
import styles from "../../form.module.scss";
import hide from "../../../../img/arrow-up.png";
import show from "../../../../img/arrow-up.png";

import Question1 from "../../Cuestionario/question1";
import Question2 from "../../Cuestionario/question2";
import Question3 from "../../Cuestionario/question3";
import Question4 from "../../Cuestionario/question4";

const ChapterOne = ({ questionaryData }) => {
  const [open, setOpen] = useState(false);

  const openClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.flex_dropdown} onClick={openClose}>
        <div>
          <h3>{questionaryData[0].chapter_name}</h3>
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
          <p>{questionaryData[0].question_content}</p>
          <Question1 questionaryData={questionaryData} />
          <p>{questionaryData[1].question_content}</p>
          <Question2 questionaryData={questionaryData} />
          <p>{questionaryData[2].question_content}</p>
          <Question3 questionaryData={questionaryData} />
          <p>{questionaryData[3].question_content}</p>
          <Question4 questionaryData={questionaryData} />
        </section>
      )}
    </>
  );
};

export default ChapterOne;
