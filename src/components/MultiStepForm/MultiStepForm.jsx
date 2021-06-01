import React, { useState, useEffect } from "react";
import { useMultipleForm } from "usetheform";
import styles from "./form.module.scss";
import arrow from "../../img/arrow_back.png";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

const MultiStepForm = () => {
  const [currentPage, setPage] = useState({
    step: 1,
  });
  const [questionaryData, setQuestionaryData] = useState();
  const [evaluationData, setEvaluationData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(
      "https://60b0f3a01f26610017fff886.mockapi.io/protectores-de-salud/questionnaire_PDS_PROGRAM"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuestionaryData(data);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://60b0f3a01f26610017fff886.mockapi.io/protectores-de-salud/questionnaire_POST_INTERVENTION"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEvaluationData(data);
      });
  }, []);

  const [getWizardState, wizard] = useMultipleForm();
  const onSubmitWizard = () => console.log(getWizardState());
 

  const _next = () => {
    let step = currentPage.step;
    step = step + 1;
    console.log(getWizardState());
    setPage({
      step: step,
    });
  };

  const _prev = () => {
    let step = currentPage.step;
    step = step <= 1 ? 1 : step - 1;
    setPage({
      step: step,
    });
  };

  const previousButton = () => {
    let step = currentPage.step;
    if (step !== 1) {
      return (
        <button className="btn btn-secondary" type="button" onClick={_prev}>
          <img src={arrow} alt="go back" />
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    let step = currentPage.step;
    if (step === 1 || step === 3 || step === 5) {
      return (
        <button className={styles.green_button} type="button" onClick={_next}>
          Confirmar y seguir
        </button>
      );
    }
    return null;
  };

  const signButton = () => {
    let step = currentPage.step;
    if (step === 2 || step === 4) {
      return (
        <button className={styles.grey} type="button" onClick={_next}>
          Firmar y seguir
        </button>
      );
    }
    return null;
  };

  const submitButton = () => {
    let step = currentPage.step;
    if (step === 6) {
      return (
        <button className={styles.grey} type="button" onClick={_next}>
          Aceptar y enviar
        </button>
      );
    }
    return null;
  };

  return (
    <div className="container-mobile">
      <Step1 step={currentPage.step} {...wizard} />
      <Step2 step={currentPage.step}  {...wizard} />
      <Step3 questionaryData={questionaryData} step={currentPage.step}  {...wizard} />
      <Step4 step={currentPage.step}  {...wizard} />
      <Step5 evaluationData={evaluationData} step={currentPage.step}  {...wizard} />
      <Step6 step={currentPage.step}  {...wizard} onSubmit={onSubmitWizard} />
      <div className={styles.fixed_container}>
          {previousButton()}
          {nextButton()}
          {signButton()}
          {submitButton()}
        </div>
    </div>
  );
};

export default MultiStepForm;
