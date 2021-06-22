import React from "react";
import styles from "./../form.module.scss";
import hide from "./../../../img/arrow-up.png";
import show from "./../../../img/arrow-up.png";
import Element from "../element";

const Chapters = ({ question: { chapter_name } }) => {
  switch (chapter_name) {
    case "Seguro médico":
      return(
          <>
        <div className={styles.flex_dropdown} onClick={openClose}>
        <div>
          <h3>{questionaryData && questionaryData[0].chapter_name}</h3>
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
      {open && <Element/>}
      </>
      )

    default:
      break;
  }
};

export default Chapters;
