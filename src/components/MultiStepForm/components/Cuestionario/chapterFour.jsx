import React, { useState } from "react";
import styles from "../../form.module.scss";
import hide from "../../../../img/arrow-up.png";
import show from "../../../../img/arrow-up.png";

import Question24 from "../../Cuestionario/question24";
import Question25 from "../../Cuestionario/question25";
import Question26 from "../../Cuestionario/question26";
import Question27 from "../../Cuestionario/question27";

const ChapterFour = ({ questionaryData }) => {
  const [open, setOpen] = useState(false);

  const openClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.flex_dropdown} onClick={openClose}>
        <div>
          <h3>{questionaryData[23].chapter_name}</h3>
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
          <p>{questionaryData[23].question_content}</p>
          <Question24 questionaryData={questionaryData} />
          <p>{questionaryData[24].question_content}</p>
          <Question25 questionaryData={questionaryData} />
          <p>{questionaryData[25].question_content}</p>
          <Question26 questionaryData={questionaryData} />
          <p>{questionaryData[26].question_content}</p>
          <Question27 questionaryData={questionaryData} />
        </section>
      )}
    </>
  );
};

export default ChapterFour;
