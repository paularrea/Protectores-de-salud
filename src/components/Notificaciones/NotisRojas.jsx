import React from "react";
import styles from "./notificaciones.module.scss"
import campana from "../../img/campana.png"

const NotisRojas = () => {
  return (
    <div
      style={{ backgroundColor: "#e942362f", borderLeft:'2px solid #E94236' }}
      className={styles.notificaciones_container}
    >
      <p>
        Tu cita de hoy, jueves 16 de abril, a las 5:00 p.m. ha sido anulada por
        el paciente.
      </p>
      <a href="">Ok, entendido.</a>
      <div className={styles.icon}><img src={campana} alt=""/></div>
    </div>
  );
};

export default NotisRojas;
