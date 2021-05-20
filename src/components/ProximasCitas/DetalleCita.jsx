import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import styles from "./proximasCitas.module.scss";
import notificationStyles from "../Notificaciones/notificaciones.module.scss";

import userIcon from "../../img/User.png";
import phoneIcon from "../../img/phone.png";
import arrow from "../../img/arrow-right.png";

const DetalleCita = () => {
  const { contextUser } = useContext(UserContext);
  console.log(contextUser.citas[0].presenciales[0].firstName, "detalle");

  const firstName = contextUser.citas[0].presenciales[0].firstName;
  const lastName = contextUser.citas[0].presenciales[0].lastName;
  const phone = contextUser.citas[0].presenciales[0].phone;
  const actions = contextUser.citas[0].presenciales[0].actions.map(
    (action, key) => (
      <div key={key} className={styles.flex_actions}>
        <div className={styles.number}>{key + 1}</div>
        <p>{action}</p>
      </div>
    )
  );

  return (
    <div className="container-mobile">
      {/* <button onClick={goBack}>X</button> */}
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
          <img src={alert} alt="" />
        </div>
      </div>

      <div className={styles.container_detalle}>
        <div className={styles.user_flex}>
          <div>
            <img src={userIcon} alt="user" />
          </div>
          <h3>
            {firstName} {lastName}
          </h3>
        </div>

        <div className={styles.phone_flex}>
          <img src={phoneIcon} alt="phone" />
          <h3>{phone}</h3>
        </div>

        <hr style={{ margin: "2rem 0", opacity:0.2 }} />

        <div className={styles.actions_container}>
          <h5>Acciones requeridas</h5>
          {actions}
        </div>

        <div className={styles.form_button_container}>
          <h5>Listo para empezar?</h5>
          <div className={styles.green_button}><h5>Empezar visita</h5><img src={arrow} alt="arrow" /></div>
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
