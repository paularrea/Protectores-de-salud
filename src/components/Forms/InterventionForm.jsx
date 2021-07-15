import React, { useState, useEffect, useRef, useContext } from "react";
import { Form } from "react-final-form";
import styles from "./form.module.scss";
import { Link } from "react-router-dom";
import { Redirect, useLocation } from "react-router-dom";
import desktopStyle from "../../styles/dashboard.module.scss";
import LayoutDesktop from "../LayoutDesktop/LayoutDesktop";
import MediaQuery from "react-responsive";
import arrow from "../../img/arrow_back.png";
import { makeValidate, makeRequired } from "mui-rff";
import { UserContext } from "../../UserContext.js";
import schema from "./components/validationSchema";

import Step1 from "./InterventionStep1";
import Step2 from "./InterventionStep2";
import Step3 from "./InterventionStep3";
import Step4 from "./InterventionStep4";
import Step5 from "./InterventionStep5";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const blue_pds = createMuiTheme({
  palette: {
    primary: {
      main: "#4284F3",
    },
  },
});

// const required = message => value => value ? undefined : message || "Campo obligatorio";
const validate = makeValidate(schema);
const required = makeRequired(schema);

const MultiStepForm = () => {
  const { contextUser } = useContext(UserContext);
  const location = useLocation();
  const topRef = useRef(null);
  const [currentPage, setPage] = useState({
    step: 1,
  });
  const [questionaryData, setQuestionaryData] = useState(null);
  const [sendForm, setSendForm] = useState(false);
  const [formResults, collectFormResults] = useState({});
  const [isPDSSigned, setIsPDSSigned] = useState(false);
  const [isConfirmationSigned, setIsConfirmationSigned] = useState(false);

  const patient = location.state.patient;
  const patientDate = location.state.patientDate;
  const interventionId = location.state.patient.intervention_id;

  useEffect(() => {
    fetch(
      "https://60b0f3a01f26610017fff886.mockapi.io/protectores-de-salud/questionnaire_PDS_PROGRAM"
      // "http://localhost:3004/questionnaire_PDS_PROGRAM"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuestionaryData(data);
      });
  }, []);

  console.log(formResults, "INTERVENTION DATA RESULTS");
  console.log(schema.fields, "schema");

  const _next = () => {
    let step = currentPage.step;
    step = step + 1;
    if (window.innerWidth > 1026) {
      topRef.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    setPage({
      step: step,
    });
  };

  const _prev = () => {
    if (window.innerWidth > 1026) {
      topRef.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    let step = currentPage.step;
    step = step <= 1 ? 1 : step - 1;
    setPage({
      step: step,
    });
  };

  const handleSubmit = async (values) => {
    let step = currentPage.step;
    if (step === 5) {
      collectFormResults(JSON.stringify(values, 0, 2));
      setSendForm(true);
    } else {
      console.log("next page");
      _next()
    }
  };

  const nextButton = () => {
    let step = currentPage.step;
    if (step === 1 || step === 3) {
      return (
        <button className={styles.green_button} type="submit">
          Confirmar y seguir
        </button>
      );
    }
    return null;
  };

  const previousButton = () => {
    let step = currentPage.step;
    if (step === 1) {
      return (
        <>
          <Link
            to={{
              pathname: "/",
            }}
          >
            <button>
              <img src={arrow} alt="go back" />
            </button>
          </Link>
        </>
      );
    } else {
      return (
        <button type="button" onClick={_prev}>
          <img src={arrow} alt="go back" />
        </button>
      );
    }
  };

  const signButton = () => {
    let step = currentPage.step;
    if (step === 2) {
      return (
        <button
          disabled={!isPDSSigned}
          className={isPDSSigned ? styles.green_button : styles.grey_button}
          type="submit"
        >
          Firmar y seguir
        </button>
      );
    } else if (step === 4) {
      return (
        <button
          disabled={!isConfirmationSigned}
          className={
            isConfirmationSigned ? styles.green_button : styles.grey_button
          }
          type="submit"
        >
          Firmar y seguir
        </button>
      );
    }
    return null;
  };

  const submitButton = () => {
    let step = currentPage.step;
    if (step === 5) {
      return (
        <button className={styles.green_button} type="submit">
          Aceptar y enviar
        </button>
      );
    }
    return null;
  };

  return (
    <div className={desktopStyle.container}>
      <div className={desktopStyle.flex_desktop}>
        <ThemeProvider theme={blue_pds}>
          <MediaQuery minWidth={1026}>
            <LayoutDesktop />
          </MediaQuery>
          <div
            className="container-mobile"
            style={{ height: "60vh", top: "8rem" }}
          >
            <Form
              onSubmit={handleSubmit}
              validate={validate}
              initialValues={{
                interventionId: interventionId,
                patient_name: patient.patient_name,
                patient_middle_name: patient.patient_middle_name,
                patient_last_name: patient.patient_last_name,
                patient_second_last_name: patient.patient_second_last_name,
                phone: patient.phone,
                city: patient.city,
                coutry: patient.coutry,
                address: patient.address,
              }}
              render={({ values, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Step1
                    required={required}
                    refProp={topRef}
                    patient={patient}
                    step={currentPage.step}
                  />
                  <Step2
                    setIsPDSSigned={setIsPDSSigned}
                    refProp={topRef}
                    step={currentPage.step}
                  />
                  <Step3
                    refProp={topRef}
                    questionaryData={questionaryData}
                    step={currentPage.step}
                  />
                  <Step4
                    setIsConfirmationSigned={setIsConfirmationSigned}
                    refProp={topRef}
                    user={contextUser}
                    patientDate={patientDate}
                    patient={patient}
                    questionaryData={questionaryData}
                    step={currentPage.step}
                  />
                  <Step5
                    required={required}
                    topRef={topRef}
                    step={currentPage.step}
                  />
                  <div className={styles.fixed_container}>
                    <div className={styles.fixed}>
                      {previousButton()}
                      {nextButton()}
                      {signButton()}
                      {submitButton()}
                    </div>
                  </div>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
              )}
            />
            {sendForm && <Redirect to="/success-form" />}
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default MultiStepForm;
