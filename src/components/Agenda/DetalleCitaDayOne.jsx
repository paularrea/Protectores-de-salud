import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

import "../../styles/App.scss";
import styles from "./agenda.module.scss";
import desktopStyle from "../../styles/dashboard.module.scss";

import userIcon from "../../img/User.png";
import closeIcon from "../../img/close.png";
import phoneIcon from "../../img/phone.png";
import locationIcon from "../../img/Place.png";
import arrow from "../../img/arrow-right.png";
import LayoutDesktop from "../LayoutDesktop/LayoutDesktop";

const DetalleCitaDayOne = () => {
  const history = useHistory();
  const [patient, setCurrentPatient] = useState({});
  const [callEvent, setCallEvent] = useState({})
  const [patientDate, setPatientDate] = useState();
  const { contextUser } = useContext(UserContext);
  const { id } = useParams();
  const interventions = contextUser && contextUser.agenda.day_1.interventions;
  const currentAppointment =
    interventions &&
    interventions.filter((intervention) => intervention.intervention_id === id);

  const handleBack = () => {
    history.goBack();
  };

  const currentPatient = currentAppointment && currentAppointment[0];
  const actions =
    currentAppointment &&
    currentAppointment[0].actions.map((action, key) => (
      <div key={key} className={styles.flex_actions}>
        <div className={styles.number}>{key + 1}</div>
        <p>{action}</p>
      </div>
    ));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const interventions = contextUser && contextUser.agenda.day_1.interventions;
    const currentAppointment =
      interventions &&
      interventions.filter(
        (intervention) => intervention.intervention_id === id
      );
    const currentPatient = currentAppointment && currentAppointment[0];
    setCurrentPatient(currentPatient);
    setPatientDate(contextUser && contextUser.agenda.day_1.date);
    setCallEvent({
      action: "CALL_EVENT",
      LocalDateAndTime: new Date().toString(),
      UTCDateAndTime: new Date().toUTCString(),
      userAgent: navigator.userAgent,
      userId: contextUser && contextUser.id,
    });
  }, [contextUser, id]);

  const isVisit =
    currentPatient && currentPatient.intervention_type === "VISIT";

  return (
    <div className={desktopStyle.container}>
      <div className={desktopStyle.flex_desktop}>
        <MediaQuery minWidth={1026}>
          <LayoutDesktop />
        </MediaQuery>
        <div className="container-mobile">
          <div className={styles.container}>
            <div className={styles.close}>
              <button onClick={handleBack}>
                <img src={closeIcon} alt="close" />
              </button>
            </div>
            <div className={styles.container_detalle}>
              <div className={styles.user_flex}>
                <div>
                  <img src={userIcon} alt="user" />
                </div>
                <h3>
                  {currentPatient && currentPatient.patient_name}{" "}
                  {currentPatient && currentPatient.patient_middle_name}{" "}
                  {currentPatient && currentPatient.patient_last_name}{" "}
                  {currentPatient && currentPatient.patient_second_last_name}
                </h3>
              </div>
              {isVisit && (
                <>
                  <div
                    style={{ alignItems: "flex-start" }}
                    className={styles.user_flex}
                  >
                    <div>
                      <img src={locationIcon} alt="location" />
                    </div>
                    <h3 style={{ fontWeight: "400", lineHeight: "24px" }}>
                      {currentPatient && currentPatient.address}{" "}
                      {currentPatient && currentPatient.city}{" "}
                      {currentPatient && currentPatient.country} <br />
                      <a
                        style={{ fontSize: "12px", fontWeight: "700" }}
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.google.es/maps/place/${
                          currentPatient && currentPatient.address
                        },+${currentPatient && currentPatient.city},+${
                          currentPatient && currentPatient.country
                        }`}
                      >
                        VER MAPA
                      </a>
                    </h3>
                  </div>
                </>
              )}
              <a onClick={() => console.log(callEvent, "CALL_EVENT")} href={`tel:${currentPatient && currentPatient.phone}`}>
                <div className={styles.phone_flex}>
                  <img src={phoneIcon} alt="phone" />
                  <h3>{currentPatient && currentPatient.phone}</h3>
                </div>
              </a>

              <hr style={{ margin: "2rem 0", opacity: 0.2 }} />

              <div className={styles.actions_container}>
                <h3>Acciones requeridas</h3>
                {actions}
              </div>

              <div className={styles.form_button_container}>
                <div className={styles.text}>
                  <h3>Listo para empezar?</h3>
                  <p>
                    Si has intentado llamar a la paciente pero no has podido
                    contactar con ella, puedes pasar directamente a la
                    evaluación de la intervención.
                  </p>
                  <Link
                    to={{
                      pathname: "/pds-form",
                      state: {
                        patient: patient,
                        patientDate: patientDate,
                      },
                    }}
                  >
                    <div className={styles.green_button}>
                      <h3>Empezar intervención</h3>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </Link>
                </div>

                <div className={styles.text}>
                  <h3>Evalúa la intervención</h3>
                  <p>
                    Rellena este formulario una vez hayas terminado con la
                    intervención.
                  </p>
                  <Link
                    to={{
                      pathname: "/evaluation-form",
                      state: {
                        patient: patient,
                        patientDate: patientDate,
                      },
                    }}
                  >
                    <div className={styles.green_button}>
                      <h3>Empezar evaluación</h3>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleCitaDayOne;
