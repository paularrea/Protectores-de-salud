import React, { useState } from "react";
import styles from "../../form.module.scss";
import hide from "../../../../img/arrow-up.png";
import show from "../../../../img/arrow-up.png";

import Question32 from "../../Cuestionario/question32";
import Question33 from "../../Cuestionario/question33";
import Question34 from "../../Cuestionario/question34";
import Question35 from "../../Cuestionario/question35";
import Question36 from "../../Cuestionario/question36";
import Question37 from "../../Cuestionario/question37";
import Question38 from "../../Cuestionario/question38";
import Question39 from "../../Cuestionario/question39";

const ChapterSix = ({ questionaryData }) => {
  const [open, setOpen] = useState(false);

  const openClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.flex_dropdown} onClick={openClose}>
        <div>
          <h3>{questionaryData[31].chapter_name}</h3>
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
      )}
    </>
  );
};

export default ChapterSix;
