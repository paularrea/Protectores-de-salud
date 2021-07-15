import React, { useState, useEffect, useRef, useContext } from "react";
import { Form, Formik } from "formik";

import styles from "./form.module.scss";
import { Redirect, useLocation } from "react-router-dom";
import { Stepper } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import arrow from "../../img/arrow_back.png";
import desktopStyle from "../../styles/dashboard.module.scss";
import LayoutDesktop from "../LayoutDesktop/LayoutDesktop";
import MediaQuery from "react-responsive";
import { UserContext } from "../../UserContext.js";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import "./form.css";

import Step1 from "./FormikStep1";
import Step2 from "./FormikStep2";
import Step3 from "./FormikStep3";
import Step4 from "./FormikStep4";
import Step5 from "./FormikStep5";

const steps = [Step1, Step2, Step3, Step4, Step5];

const theme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: "#0000009a",
        },
        "&$active": {
          color: "#000000bc",
        },
      },
    },
  },
});

const blue_pds = createMuiTheme({
  palette: {
    primary: {
      main: "#4284F3",
    },
    error: {
      main: "#FF2E79",
    },
  },
});

const Intervention = (props) => {
  const { contextUser } = useContext(UserContext);
  const topRef = useRef(null);
  const location = useLocation();
  const [isSent, sendForm] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isPDSSigned, setIsPDSSigned] = useState(false);
  const [pdsSign, setPdsSign] = useState("");
  const [confirmationSign, setConfirmationSign] = useState("");
  const [isConfirmationSigned, setIsConfirmationSigned] = useState(false);
  const [questionaryData, setQuestionaryData] = useState(null);

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

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };
  const handlePrev = () => {
    if (window.innerWidth > 1026) {
      topRef.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    setActiveStep(Math.max(activeStep - 1, 0));
  };

  const handleNext = () => {
    if (window.innerWidth > 1026) {
      topRef.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    setActiveStep(Math.min(activeStep + 1, steps.length - 1));
  };

  const onSubmit = (values, formikBag) => {
    const { setSubmitting } = formikBag;
    isLastStep() && sendForm(true);
    if (!isLastStep()) {
      setSubmitting(false);
      handleNext();
      return;
    }
    console.log({
      PDSform: values,
      pdsSignature: pdsSign,
      confirmationSignature: confirmationSign,
    });
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  // const initialValues = steps.reduce(
  //   (values, { initialValues }) => ({
  //     ...values,
  //     ...initialValues,
  //   }),
  //   {}
  // );
  
  const ActiveStep = steps[activeStep];
  const validationSchema = ActiveStep.validationSchema;
  return (
    <div className={desktopStyle.container}>
      <div className={desktopStyle.flex_desktop}>
        <MediaQuery minWidth={1026}>
          <LayoutDesktop />
        </MediaQuery>
        <div
          className="container-mobile"
          style={{ height: "60vh", top: "8rem" }}
        >
          <Formik
            initialValues={{
              patientFirstName: patient.patient_name,
              patientMiddleName: patient.patient_middle_name,
              patientLastName: patient.patient_last_name,
              patientSecondLastName: patient.patient_second_last_name,
              patientPhone: patient.phone,
              patientCountry: patient.country,
              patientCity: patient.city,
              patientAddress: patient.address,
              acceptAndSent: false,
            }}
            enableReinitialize
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting, touched, values, errors }) => (
              <>
                <Form>
                  <div className={styles.fixed_header}>
                    <div className={styles.header}>
                      <div>
                        <ThemeProvider theme={theme}>
                          <Stepper
                            style={{
                              height: "auto",
                              backgroundColor: "#2e82f8",
                            }}
                            activeStep={activeStep}
                          >
                            <img src={steps[activeStep].Img} alt="form steps" />
                          </Stepper>
                        </ThemeProvider>
                        <p>PASO {activeStep + 1}</p>
                        <h2>{steps[activeStep].label}</h2>
                      </div>
                    </div>
                  </div>

                  <SwipeableViews
                    disabled
                    index={activeStep}
                  >
                    {steps.map((step, index) => {

                      const Component = steps[index];
                      return (
                        <ThemeProvider theme={blue_pds}>
                          <Component
                            pdsSign={pdsSign}
                            setPdsSign={setPdsSign}
                            confirmationSign={confirmationSign}
                            setConfirmationSign={setConfirmationSign}
                            values={values}
                            interventionId={interventionId}
                            user={contextUser}
                            patientDate={patientDate}
                            patient={patient}
                            questionaryData={questionaryData}
                            refProp={topRef}
                            setIsPDSSigned={setIsPDSSigned}
                            setIsConfirmationSigned={setIsConfirmationSigned}
                            key={index}
                          />
                        </ThemeProvider>
                      );
                    })}
                  </SwipeableViews>
                  <div className={styles.fixed_container}>
                    <div className={styles.fixed}>
                      <button
                        disabled={activeStep === 0 || isSubmitting}
                        type="button"
                        onClick={handlePrev}
                      >
                        <img src={arrow} alt="go back" />
                      </button>
                      {activeStep === 1 && (
                        <button
                          disabled={!isPDSSigned}
                          className={
                            isPDSSigned
                              ? styles.green_button
                              : styles.grey_button
                          }
                          type="submit"
                        >
                          Firmar y seguir
                        </button>
                      )}
                      {activeStep === 3 && (
                        <button
                          disabled={!isConfirmationSigned}
                          className={
                            isConfirmationSigned
                              ? styles.green_button
                              : styles.grey_button
                          }
                          type="submit"
                        >
                          Firmar y seguir
                        </button>
                      )}
                      {(activeStep === 0 || activeStep === 2) && (
                        <button className={styles.green_button} type="submit">
                          Confirmar y seguir
                        </button>
                      )}
                      {activeStep === 4 && (
                        <button className={styles.green_button} type="submit">
                          Aceptar y enviar
                        </button>
                      )}
                    </div>
                  </div>
                </Form>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                <pre>{JSON.stringify(touched, null, 2)}</pre> */}
              </>
            )}
          </Formik>
          {isSent && <Redirect to="/success-form" />}
        </div>
      </div>
    </div>
  );
};

export default Intervention;
