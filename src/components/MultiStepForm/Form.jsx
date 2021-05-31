import React, { useState, useEffect } from "react";
import styles from "./form.module.scss";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6"

import arrow from "../../img/arrow_back.png";

const Form = () => {
  const [formData, setFormData] = useState({
    currentStep: 1,
    email: "",
    username: "",
    password: "",
  });
  const [questionaryData, setQuestionaryData] = useState();
  const [evaluationData, setEvaluationData] = useState();

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = formData;
    alert(`Your registration detail: \n 
               Email: ${email} \n 
               Username: ${username} \n
               Password: ${password}`);
  };

  const _next = () => {
    let currentStep = formData.currentStep;
    currentStep = currentStep + 1;
    setFormData({
      currentStep: currentStep,
    });
  };

  const _prev = () => {
    let currentStep = formData.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setFormData({
      currentStep: currentStep,
    });
  };

  const previousButton = () => {
    let currentStep = formData.currentStep;
    if (currentStep !== 1) {
      return (
        <button className="btn btn-secondary" type="button" onClick={_prev}>
          <img src={arrow} alt="go back" />
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    let currentStep = formData.currentStep;
    if (currentStep < 6) {
      return (
        <button className={styles.green_button} type="button" onClick={_next}>
          Confirmar y seguir
        </button>
      );
    }
    return null;
  };

  return (
    <div className="container-mobile">
      <form onSubmit={handleSubmit}>
        {/* 
        render the form steps and pass required props in
      */}
        <Step1 currentStep={formData.currentStep} handleChange={handleChange} />
        <Step2 currentStep={formData.currentStep} handleChange={handleChange} />
        <Step3
          currentStep={formData.currentStep}
          handleChange={handleChange}
          questionaryData={questionaryData}
        />
        <Step4 currentStep={formData.currentStep} handleChange={handleChange} />
        <Step5
          currentStep={formData.currentStep}
          handleChange={handleChange}
          evaluationData={evaluationData}
        />
        <Step6 currentStep={formData.currentStep} handleChange={handleChange} />

        <div className={styles.fixed_container}>
          {previousButton()}
          {nextButton()}
        </div>
      </form>
    </div>
  );
};

export default Form;
