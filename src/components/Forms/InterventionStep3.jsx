import React from "react";
import styles from "./form.module.scss";
// import * as Yup from "yup";
import Element from "./components/ElementForm";
import Chapter from "./components/Chapter/chapter";
import step3 from "../../img/steps/step3.png";

const Step3 = ({ refProp, ...props }) => {
  const cuestionario = props.questionaryData
    ? props.questionaryData.map((question, i) => (
        <Element key={i} question={question} />
      ))
    : null;

    
    let chapterOne =
    cuestionario &&
    cuestionario.reduce(function (filteredGroup, question) {
      if (question.props.question.chapter_name === "Seguro médico") {
        filteredGroup.push(question);
      }
      return filteredGroup;
    }, []);
    let chapterTwo =
    cuestionario &&
    cuestionario.reduce(function (filteredGroup, question) {
      if (question.props.question.chapter_name === "Información general") {
        filteredGroup.push(question);
      }
      return filteredGroup;
    }, []);
    let chapterThree =
    cuestionario &&
    cuestionario.reduce(function (filteredGroup, question) {
      if (question.props.question.chapter_name === "Hogar") {
        filteredGroup.push(question);
      }
      return filteredGroup;
    }, []);
    let chapterFour =
    cuestionario &&
    cuestionario.reduce(function (filteredGroup, question) {
      if (question.props.question.chapter_name === "Acceso a servicios") {
        filteredGroup.push(question);
      }
      return filteredGroup;
    }, []);
    let chapterFive =
    cuestionario &&
    cuestionario.reduce(function (filteredGroup, question) {
      if (question.props.question.chapter_name === "Entorno") {
        filteredGroup.push(question);
      }
      return filteredGroup;
    }, []);
    let chapterSix =
    cuestionario &&
    cuestionario.reduce(function (filteredGroup, question) {
      if (question.props.question.chapter_name === "Historial Médico") {
        filteredGroup.push(question);
      }
      return filteredGroup;
    }, []);
    
    const questionnaireInChapters = (
      <div name="questionnairePDS">
      <Chapter questions={chapterOne} />
      <Chapter questions={chapterTwo} />
      <Chapter questions={chapterThree} />
      <Chapter questions={chapterFour} />
      <Chapter questions={chapterFive} />
      <Chapter questions={chapterSix} />
    </div>
  );
  
  return (
    <div className={styles.container}>
      <div ref={refProp} className={styles.content}>
        {questionnaireInChapters.props.children}
      </div>
    </div>
  );
};

Step3.label = "Cuestionario";

// Step3.validationSchema = Yup.object().required('required!')

Step3.Img = step3;

export default Step3;
