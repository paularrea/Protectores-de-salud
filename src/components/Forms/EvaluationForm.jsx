import React, { useState, useEffect, useRef } from "react";
import { useMultipleForm } from "usetheform";
import styles from "./form.module.scss";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import desktopStyle from "../../styles/dashboard.module.scss";
import LayoutDesktop from "../LayoutDesktop/LayoutDesktop";
import arrow from "../../img/arrow_back.png";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import EvaluationStep1 from "./EvaluationStep1";
import EvaluationStep2 from "./EvaluationStep2";
import MediaQuery from "react-responsive";

const blue_pds = createMuiTheme({
  palette: {
    primary: {
      main: '#4284F3',
    } 
  },
});

const EvaluationForm = () => {
  // const location = useLocation();
  const topRef = useRef(null);
  const [currentPage, setPage] = useState({
    step: 1,
  });
  const [evaluationData, setEvaluationData] = useState();
  const [sendForm, setSendForm] = useState(false);

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

  const onSubmitWizard = () => {
    console.log(getWizardState());
    setSendForm(true);
  };
  const _next = () => {
    let step = currentPage.step;
    step = step + 1;
    console.log(getWizardState());
    if (window.innerWidth > 1026){
      topRef.current.scrollIntoView();

    } else {
    window.scrollTo(0, 0);
    }
    setPage({
      step: step,
    });
  };

  const _prev = () => {
    let step = currentPage.step;
    step = step <= 1 ? 1 : step - 1;
    if (window.innerWidth > 1026){
      topRef.current.scrollIntoView();

    } else {
    window.scrollTo(0, 0);
    }
    setPage({
      step: step,
    });
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

  const nextButton = () => {
    let step = currentPage.step;
    if (step === 1) {
      return (
        <button className={styles.green_button} type="button" onClick={_next}>
          Confirmar y seguir
        </button>
      );
    }
    return null;
  };

  const submitButton = () => {
    let step = currentPage.step;
    if (step === 2) {
      return (
        <button
          className={styles.green_button}
          type="submit"
          onClick={onSubmitWizard}
        >
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
        <div className="container-mobile" style={{height:'60vh', top:'8rem'}}>
          <EvaluationStep1
            topRef={topRef}
            evaluationData={evaluationData}
            step={currentPage.step}
            {...wizard}
          />
          <EvaluationStep2
            topRef={topRef}
            step={currentPage.step}
            {...wizard}
          />
          <div className={styles.fixed_container}>
            <div className={styles.fixed}>
              {previousButton()}
              {nextButton()}
              {submitButton()}
            </div>
          </div>
          {sendForm && <Redirect to="/success-form" />}
        </div>
      </ThemeProvider>
      </div>
    </div>
  );
};

export default EvaluationForm;
