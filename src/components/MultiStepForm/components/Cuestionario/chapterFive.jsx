import React, { useState } from "react";
import styles from "../../form.module.scss";
import hide from "../../../../img/arrow-up.png";
import show from "../../../../img/arrow-up.png";

import Question28 from "../../Cuestionario/question28";
import Question29 from "../../Cuestionario/question29";
import Question30 from "../../Cuestionario/question30";
import Question31 from "../../Cuestionario/question31";

const ChapterFive = ({ questionaryData }) => {
  const [open, setOpen] = useState(false);
  const openClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={styles.flex_dropdown} onClick={openClose}>
        <div>
          <h3>{questionaryData[27].chapter_name}</h3>
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
          <p>{questionaryData[27].question_content}</p>
          <Question28 questionaryData={questionaryData} />
          <p>{questionaryData[28].question_content}</p>
          <Question29 questionaryData={questionaryData} />
          <p>{questionaryData[29].question_content}</p>
          <Question30 questionaryData={questionaryData} />
          <p>{questionaryData[30].question_content}</p>
          <Question31 questionaryData={questionaryData} />
        </section>
      )}
    </>
  );
};

export default ChapterFive;
