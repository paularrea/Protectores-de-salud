import React, { useState } from "react";
import styles from "../../form.module.scss";
import hide from "../../../../img/arrow-up.png";
import show from "../../../../img/arrow-up.png";

const Chapter = ({ questions }) => {
  const [open, setOpen] = useState(false);

  const openClose = () => {
    setOpen(!open);
  };
  const chapterName = questions && questions[0].props.question.chapter_name;
  console.log(chapterName, 'questi')

  return (
    <>
      <div className={styles.flex_dropdown} onClick={openClose}>
        <div>
          <h3>{chapterName}</h3>
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
      {open && <section>{questions}</section>}
    </>
  );
};

export default Chapter;
