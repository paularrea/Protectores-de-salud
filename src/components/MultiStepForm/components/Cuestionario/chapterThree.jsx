import React, { useState } from "react";
import styles from "../../form.module.scss";
import hide from "../../../../img/arrow-up.png";
import show from "../../../../img/arrow-up.png";

import Question17 from "../../Cuestionario/question17";
import Question18 from "../../Cuestionario/question18";
import Question19 from "../../Cuestionario/question19";
import Question20 from "../../Cuestionario/question20";
import Question21 from "../../Cuestionario/question21";
import Question22 from "../../Cuestionario/question22";
import Question23 from "../../Cuestionario/question23";

const ChapterThree = ({ questionaryData }) => {
  const [open, setOpen] = useState(false);

  const openClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.flex_dropdown} onClick={openClose}>
        <div>
          <h3>{questionaryData[16].chapter_name}</h3>
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
      )}
    </>
  );
};

export default ChapterThree;