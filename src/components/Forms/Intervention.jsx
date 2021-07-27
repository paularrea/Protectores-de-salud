import React, { useState, useEffect, useRef, useContext } from "react";
import { Form, Formik } from "formik";
import styles from "./form.module.scss";
import { Redirect, useLocation, Link } from "react-router-dom";
import { Stepper } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import arrow from "../../img/arrow_back.png";
import desktopStyle from "../../styles/dashboard.module.scss";
import LayoutDesktop from "../LayoutDesktop/LayoutDesktop";
import MediaQuery from "react-responsive";
import { UserContext } from "../../UserContext.js";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import "./form.css";

import Step1 from "./InterventionStep1";
import Step2 from "./InterventionStep2";
import Step3 from "./InterventionStep3";
import Step4 from "./InterventionStep4";
import Step5 from "./InterventionStep5";
import { useGeolocation } from "../../hooks/useGeolocation";

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
  const [formDataEvent, setFormDataEvent] = useState({});
  const { geolocation } = useGeolocation();

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

  useEffect(() => {
    setFormDataEvent({
      local_date_time: new Date().toString(),
      utc_date_time: new Date().toUTCString(),
      device_user_agent: navigator.userAgent,
      action: "INTERVENTION_QUESTIONNAIRE_EVENT",
      step: activeStep + 1,
      intervention_id: interventionId,
      user_id: contextUser && contextUser.id,
      pds_program_signature: pdsSign,
      confirmation_signature: confirmationSign,
      position_coords_latitude: geolocation && geolocation.latitude,
      position_coords_longitude: geolocation && geolocation.longitude
    });
  }, [activeStep, interventionId, contextUser, pdsSign, confirmationSign, geolocation]);

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };
  const handlePrev = (values) => {
    if (window.innerWidth > 1026) {
      topRef.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    console.log(formDataEvent, "GO_BACK");
    setActiveStep(Math.max(activeStep - 1, 0));
  };

  const handleNext = async (values, setValues) => {
    if (window.innerWidth > 1026) {
      topRef.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    setActiveStep(Math.min(activeStep + 1, steps.length - 1));
  };

  const onSubmit = async (values, bag) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    bag.setSubmitting(false);
    console.log({ formDataEvent, intervention_form: values });
    if (!isLastStep()) {
      handleNext();
      return;
    } else {
      sendForm(true);
    }
  };

  const initialValues = {
    patientFirstName: patient.patient_name,
    patientMiddleName: patient.patient_middle_name,
    patientLastName: patient.patient_last_name,
    patientSecondLastName: patient.patient_second_last_name,
    patientPhone: patient.phone,
    patientCountry: patient.country,
    patientCity: patient.city,
    patientAddress: patient.address,
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
    q12: "",
    q13: "",
    q14: "",
    q15: "",
    q16: "",
    q17: "",
    q18: "",
    q19: "",
    q20: "",
    q21: "",
    q22: "",
    q23: "",
    q24: "",
    q25: "",
    q26: "",
    q27: "",
    q28: "",
    q29: "",
    q30: "",
    q31: "",
    q32: "",
    q33: "",
    q34: "",
    q35: "",
    q36: "",
    q37: "",
    q38: "",
    q39: "",
  };

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
            initialValues={initialValues}
            enableReinitialize
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting, handleSubmit, touched, values, errors }) => (
              <>
                <Form onSubmit={handleSubmit}>
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

                  <SwipeableViews disabled index={activeStep}>
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
                      {activeStep !== 0 ? (
                        <button
                          disabled={activeStep === 0 || isSubmitting}
                          type="button"
                          onClick={handlePrev}
                        >
                          <img src={arrow} alt="go back" />
                        </button>
                      ) : (
                        <Link
                          to={{
                            pathname: "/",
                          }}
                        >
                          <button>
                            <img src={arrow} alt="go back" />
                          </button>
                        </Link>
                      )}
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
          {isSent && (
            <Redirect
              to={{
                pathname: "/success-form",
                state: { interventionType: "INTERVENTION" },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intervention;
