import React from "react";
import styles from "./form.module.scss";
import step3 from "../../img/steps/step3.png";
import Element from "./components/ElementForm";
import Chapter from "./components/Chapter/chapter";

function Step3({ refProp, prevPage, ...props }) {
  if (props.step !== 3) {
    return null;
  }
  const cuestionario = props.questionaryData
    ? props.questionaryData.map((question, i) => (
        <Element key={i} question={question} />
      ))
    : null;

  let chapterOne = cuestionario.reduce(function (filteredGroup, question) {
    if (question.props.question.chapter_name === "Seguro médico") {
      filteredGroup.push(question);
    }
    return filteredGroup;
  }, []);
  let chapterTwo = cuestionario.reduce(function (filteredGroup, question) {
    if (question.props.question.chapter_name === "Información general") {
      filteredGroup.push(question);
    }
    return filteredGroup;
  }, []);
  let chapterThree = cuestionario.reduce(function (filteredGroup, question) {
    if (question.props.question.chapter_name === "Hogar") {
      filteredGroup.push(question);
    }
    return filteredGroup;
  }, []);
  let chapterFour = cuestionario.reduce(function (filteredGroup, question) {
    if (question.props.question.chapter_name === "Acceso a servicios") {
      filteredGroup.push(question);
    }
    return filteredGroup;
  }, []);
  let chapterFive = cuestionario.reduce(function (filteredGroup, question) {
    if (question.props.question.chapter_name === "Entorno") {
      filteredGroup.push(question);
    }
    return filteredGroup;
  }, []);
  let chapterSix = cuestionario.reduce(function (filteredGroup, question) {
    if (question.props.question.chapter_name === "Historial Médico") {
      filteredGroup.push(question);
    }
    return filteredGroup;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.fixed_header}>
        <div className={styles.header}>
          <div>
            <img src={step3} alt="step3" />
            <p>PASO {props.step}</p>
            <h2>Cuestionario</h2>
          </div>
        </div>
      </div>
        <div ref={refProp} className={styles.content}>
          <Chapter questions={chapterOne} />
          <Chapter questions={chapterTwo} />
          <Chapter questions={chapterThree} />
          <Chapter questions={chapterFour} />
          <Chapter questions={chapterFive} />
          <Chapter questions={chapterSix} />
        </div>
    </div>
  );
}

export default Step3;
