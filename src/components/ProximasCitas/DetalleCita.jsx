import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";

import styles from "./proximasCitas.module.scss";
import notificationStyles from "../Notificaciones/notificaciones.module.scss";

import userIcon from "../../img/User.png";
import phoneIcon from "../../img/phone.png";
import alert from "../../img/alert.png";
import arrow from "../../img/arrow-right.png";

const DetalleCita = () => {
  const history = useHistory();
  const { contextUser } = useContext(UserContext);

  const { id } = useParams();
  const allAppointments = contextUser.citas;
  const currentAppointment = allAppointments.filter(
    (cita) => cita.id === parseInt(id)
  );

  const handleBack = () => {
    history.goBack();
  };

  const currentPatient = currentAppointment[0];

  const actions = currentAppointment[0].actions.map((action, key) => (
    <div key={key} className={styles.flex_actions}>
      <div className={styles.number}>{key + 1}</div>
      <p>{action}</p>
    </div>
  ));

  return (
    <div className="container-mobile">
      <button onClick={handleBack}>X</button>
      <div
        style={{
          backgroundColor: "#4283f332",
          borderLeft: "2px solid #4284F3",
        }}
        className={notificationStyles.notificaciones_container}
      >
        <p>Notificacion</p>

        <a href="/">Ok, entendido.</a>
        <div className={notificationStyles.icon}>
          <img src={alert} alt="alert" />
        </div>
      </div>

      <div className={styles.container_detalle}>
        <div className={styles.user_flex}>
          <div>
            <img src={userIcon} alt="user" />
          </div>
          <h3>
            {currentPatient.firstName} {currentPatient.lastName}
          </h3>
        </div>

        <div className={styles.phone_flex}>
          <img src={phoneIcon} alt="phone" />
          <h3>{currentPatient.phone}</h3>
        </div>

        <hr style={{ margin: "2rem 0", opacity: 0.2 }} />

        <div className={styles.actions_container}>
          <h5>Acciones requeridas</h5>
          {actions}
        </div>

        <div className={styles.form_button_container}>
          <h5>Listo para empezar?</h5>
          <Link to={'/form'}>
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
  );
};

export default DetalleCita;
