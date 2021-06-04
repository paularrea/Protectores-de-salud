import React, { useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";

import styles from "./proximasCitas.module.scss";
import notificationStyles from "../Notificaciones/notificaciones.module.scss";

import userIcon from "../../img/User.png";
import closeIcon from "../../img/close.png";
import phoneIcon from "../../img/phone.png";
import locationIcon from "../../img/Place.png";
import arrow from "../../img/arrow-right.png";

const DetalleCitaDayTwo = () => {
  const [closeNoti, setCloseNoti] = useState(false);
  const history = useHistory();
  const { contextUser } = useContext(UserContext);
  const { id } = useParams();
  const interventions = contextUser && contextUser.agenda.day_2.interventions;
  const currentAppointment = interventions.filter(
    (intervention) => intervention.intervention_id === id
  );

  const handleBack = () => {
    history.goBack();
  };
  const closeNotification = () => {
    setCloseNoti(true);
  };
  const currentPatient = currentAppointment[0];
  const actions = currentAppointment[0].actions.map((action, key) => (
    <div key={key} className={styles.flex_actions}>
      <div className={styles.number}>{key + 1}</div>
      <p>{action}</p>
    </div>
  ));

  const date = contextUser.agenda.day_2.date;
  const isVisit = currentPatient.intervention_type === "VISIT";

  return (
    <div className="container-mobile">
      <div className={styles.container}>
        <div className={styles.close}>
          <button onClick={handleBack}>
            <img src={closeIcon} alt="close" />
          </button>
        </div>
        {!closeNoti && (
          <div
            style={{
              backgroundColor: "#F3F8FF",
              borderLeft: "2px solid #2E83F8",
            }}
            className={notificationStyles.notificaciones_container}
          >
            <p>
              Tienes una cita telefónica con{" "}
              {currentPatient.patient.replace(/ .*/, "")} {date}, a las{" "}
              {currentPatient.hour}
            </p>

            <button className="link" onClick={closeNotification}>
              Ok, entendido.
            </button>
          </div>
        )}

        <div className={styles.container_detalle}>
          <div className={styles.user_flex}>
            <div>
              <img src={userIcon} alt="user" />
            </div>
            <h3>{currentPatient.patient}</h3>
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
                  {currentPatient.address} {currentPatient.city}{" "}
                  {currentPatient.country} <br />
                  <a
                    style={{ fontSize: "12px", fontWeight: "700" }}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.google.es/maps/place/${currentPatient.address},+${currentPatient.city},+00907,+${currentPatient.country}/@18.4559418,-66.0714364,15.77z/data=!4m5!3m4!1s0x8c036f487d22dcf3:0xedbdb6ab86809ec5!8m2!3d18.4534946!4d-66.067315?hl=es`}
                  >
                    VER MAPA
                  </a>
                </h3>
              </div>
            </>
          )}
          <a href={`tel:${currentPatient.phone}`}>
            <div className={styles.phone_flex}>
              <img src={phoneIcon} alt="phone" />
              <h3>{currentPatient.phone}</h3>
            </div>
          </a>

          <hr style={{ margin: "2rem 0", opacity: 0.2 }} />

          <div className={styles.actions_container}>
            <h5>Acciones requeridas</h5>
            {actions}
          </div>

          <div className={styles.form_button_container}>
            <h5>Listo para empezar?</h5>
            <Link to={"/form"}>
              <div className={styles.green_button}>
                <h5>Empezar visita</h5>
                <img src={arrow} alt="arrow" />
              </div>
            </Link>
          </div>
          <div className={styles.text}>
            <h5>¿No has podido realizar la visita?</h5>
            <p>
              Si has intentado llamar a la paciente pero no has podido contactar
              con ella, puedes pasar directamente a la evaluación de la
              intervención.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleCitaDayTwo;
