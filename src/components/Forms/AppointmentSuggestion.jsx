import React, { useState, useEffect, useRef, useContext } from "react";
import { Form, Formik } from "formik";

import styles from "./form.module.scss";
import { Redirect, useLocation, Link } from "react-router-dom";
import { Stepper } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import arrow from "../../img/arrow_back.png";
import desktopStyle from "../../styles/workerDashboard.module.scss";
import LayoutDesktop from "../LayoutDesktop/LayoutDesktop";
import MediaQuery from "react-responsive";
import { UserContext } from "../../UserContext.js";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import "./form.css";

import Step1 from "./AppointmentSuggestionStep1";
import Step2 from "./AppointmentSuggestionStep2";
import { useGeolocation } from "../../hooks/useGeolocation";

const steps = [Step1, Step2];

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

const AppointmentSuggestion = (props) => {
  const { contextUser } = useContext(UserContext);
  const location = useLocation();
  const topRefEv = useRef(null);
  const [evaluationData, setEvaluationData] = useState();
  const [activeStep, setActiveStep] = useState(0);
  const [isSent, sendForm] = useState(false);
  const [evaluationDataEvent, setEvaluationDataEvent] = useState({});
  const { geolocation } = useGeolocation();

  const interventionId = location.state.patient.intervention_id;

  useEffect(() => {
    fetch(
      "https://60b0f3a01f26610017fff886.mockapi.io/protectores-de-salud/questionnaire_POST_INTERVENTION"
      // 'http://localhost:3004/questionnaire_POST_INTERVENTION'
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEvaluationData(data);
      });
  }, []);

  useEffect(() => {
    setEvaluationDataEvent({
      local_date_time: new Date().toString(),
      utc_date_time: new Date().toUTCString(),
      device_user_agent: navigator.userAgent,
      action: "EVALUATION_QUESTIONNAIRE_EVENT",
      step: activeStep + 1,
      intervention_id: interventionId,
      user_id: contextUser && contextUser.id,
      position_coords_latitude: geolocation && geolocation.latitude,
      position_coords_longitude: geolocation && geolocation.longitude,
    });
  }, [activeStep, interventionId, contextUser, geolocation]);

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };
  const handlePrev = () => {
    if (window.innerWidth > 1026) {
      topRefEv.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    setActiveStep(Math.max(activeStep - 1, 0));
  };

  const handleNext = () => {
    if (window.innerWidth > 1026) {
      topRefEv.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    setActiveStep(Math.min(activeStep + 1, steps.length - 1));
  };

  const onSubmit = async (values, formikBag) => {
    const { setSubmitting } = formikBag;
    console.log({
      evaluationDataEvent,
      evaluation_form: values,
    });
    isLastStep() && sendForm(true);
    if (!isLastStep()) {
      handleNext();
      setSubmitting(false);
      return;
    }
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  const initialValues = steps.reduce(
    (values, { initialValues }) => ({
      ...values,
      ...initialValues,
    }),
    {}
  );
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
            {({ isSubmitting, touched, values, errors, setFieldValue }) => (
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

                  <SwipeableViews disabled index={activeStep}>
                    {steps.map((step, index) => {
                      const Component = steps[index];
                      return (
                        <ThemeProvider theme={blue_pds}>
                          <Component
                            values={values}
                            setFieldValue={setFieldValue}
                            interventionId={interventionId}
                            evaluationData={evaluationData}
                            refProp={topRefEv}
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
                            pathname: location.state.patientURL,
                          }}
                        >
                          <button>
                            <img src={arrow} alt="go back" />
                          </button>
                        </Link>
                      )}
                      {activeStep === 1 ? (
                        <button className={styles.green_button} type="submit">
                          Aceptar y enviar
                        </button>
                      ) : (
                        <button className={styles.green_button} type="submit">
                          Confirmar y seguir
                        </button>
                      )}
                    </div>
                  </div>
                </Form>
              </>
            )}
          </Formik>
          {isSent && (
            <Redirect
              to={{
                pathname: "/success-form",
                state: {
                  interventionType: "SUGGESTION",
                  patientURL: location.state.patientURL,
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default AppointmentSuggestion;
